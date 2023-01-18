import { parseCookies } from "nookies";

export function withSSRAuth(fn) {
  return async (ctx) => {
    const { user } = parseCookies(ctx);

    if (!user) {
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
