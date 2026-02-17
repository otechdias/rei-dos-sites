import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface QueryParamsContextType {
  params: Record<string, string | string[] | undefined>;
}

const QueryParamsContext = createContext<QueryParamsContextType | undefined>(
  undefined
);

export const QueryParamsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [params, setParams] = useState<
    Record<string, string | string[] | undefined>
  >({});

  useEffect(() => {
    if (router.isReady) {
      setParams(router.query);
    }
  }, [router.query, router.isReady]);

  return (
    <QueryParamsContext.Provider value={{ params }}>
      {children}
    </QueryParamsContext.Provider>
  );
};

export const useQueryParams = () => {
  const context = useContext(QueryParamsContext);
  if (!context) {
    throw new Error(
      "useQueryParams deve ser usado dentro de um QueryParamsProvider"
    );
  }
  return context;
};
