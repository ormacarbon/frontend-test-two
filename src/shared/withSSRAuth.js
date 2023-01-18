import { parseCookies } from "nookies";

export function withSSRAuth(fn) {
  return async (ctx) => {
    const { token } = parseCookies(ctx);

    if (!token) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    const resultFn = await fn(ctx);
    return resultFn;
  };
}
