const BASE_KIWIFY_URL = process.env.NEXT_PUBLIC_BASE_KIWIFY_URL;
export const getKiwifyUrl = (
  params: Record<string, string | string[] | undefined>
) => {
  const queryString = new URLSearchParams(
    Object.entries(params).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Array.isArray(value) ? value.join(",") : value;
      }
      return acc;
    }, {} as Record<string, string>)
  ).toString();

  return queryString ? `${BASE_KIWIFY_URL}?${queryString}` : BASE_KIWIFY_URL;
};
