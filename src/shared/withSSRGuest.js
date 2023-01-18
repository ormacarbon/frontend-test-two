import { parseCookies } from "nookies";

export function withSSRGuest(fn, destination = "/") {
  return async (ctx) => {
    const { user } = parseCookies(ctx);

    if (user) {
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
