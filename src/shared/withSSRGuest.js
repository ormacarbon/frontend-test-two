import { parseCookies } from "nookies";

export function withSSRGuest(fn, destination = "/") {
  return async (ctx) => {
    const { token } = parseCookies(ctx);

    if (token) {
      return {
        redirect: {
          destination,
          permanent: false,
        },
      };
    }

    const resultFn = await fn(ctx);
    return resultFn;
  };
}
