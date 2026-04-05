const trimLeadingSlash = (path: string) => path.replace(/^\/+/, "");

export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${trimLeadingSlash(path)}`;

export const routerBasename =
  import.meta.env.BASE_URL === "/"
    ? "/"
    : import.meta.env.BASE_URL.replace(/\/$/, "");
