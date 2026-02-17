import Head from "next/head";

interface PageTitleProps {
  title: string;
  isCheckout?: boolean;
  isAdmin?: boolean;
}

const PageTitle = ({ title, isAdmin = false }: PageTitleProps) => {
  const completeTitle = isAdmin
    ? `Rei dos Sites | ${title}`
    : `Rei dos Sites | ${title}`;

  return (
    <Head>
      <title>{completeTitle}</title>
      <meta property="og:title" content={completeTitle} key="title" />
    </Head>
  );
};

export default PageTitle;
