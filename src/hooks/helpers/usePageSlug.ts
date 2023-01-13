import { useRouter } from "next/router";

export function usePageSlug(slugName: string) {
  const slug = String(useRouter().query[slugName]);
  return slug;
}
