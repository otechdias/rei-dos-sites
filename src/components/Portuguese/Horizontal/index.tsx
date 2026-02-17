import React, { useEffect, useRef, useState } from "react";

interface DynamicBackgroundProps {
  backgroundColors: string[];
  contents: string[];
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  backgroundColors,
  contents,
}) => {
  const [gradientPosition, setGradientPosition] = useState(0);
  const [currentContent, setCurrentContent] = useState(contents[0]);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!componentRef.current) return;

      const componentBounds = componentRef.current.getBoundingClientRect();
      const componentTop = componentBounds.top;
      const componentHeight = componentBounds.height;
      const windowHeight = window.innerHeight;
      const scrolledIntoView = windowHeight - componentTop;
      const scrollRange = componentHeight + windowHeight;
      const scrollFraction = Math.min(scrolledIntoView / scrollRange, 1);

      let newPosition = scrollFraction * (backgroundColors.length - 1) * 100; // Adjust for gradient shift
      let contentIndex = Math.min(
        Math.floor(scrollFraction * contents.length),
        contents.length - 1,
      );
      setGradientPosition(newPosition);
      setCurrentContent(contents[contentIndex]);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener("scroll", handleScroll);
            handleScroll(); // Initialize based on current scroll
          } else {
            window.removeEventListener("scroll", handleScroll);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gradientStyle = {
    background: `linear-gradient(to right, ${backgroundColors.join(", ")})`,
    backgroundSize: `${backgroundColors.length * 100}% 100%`,
    backgroundPosition: `${gradientPosition}% 0%`,
    transition: "background-position 0.5s ease",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF", // Ensure text color contrasts with background
  };

  return (
    <div ref={componentRef} style={gradientStyle}>
      <h1>{currentContent}</h1>
    </div>
  );
};

export default DynamicBackground;
