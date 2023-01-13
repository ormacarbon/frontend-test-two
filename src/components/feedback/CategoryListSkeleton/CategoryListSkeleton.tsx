import ContentLoader from "react-content-loader";
import { SkeletonContainer } from "../skeleton-contaner.style";

export const CategoryListSkeleton = () => (
  <SkeletonContainer>
    <ContentLoader width={"100%"} height={"4rem"}>
      <rect x="1" y="1" rx="3" ry="3" width="3rem" height="1.5rem" />
      <rect x="60" y="1" rx="3" ry="3" width="4rem" height="1.5rem" />
      <rect x="140" y="1" rx="3" ry="3" width="3rem" height="1.5rem" />
      <rect x="200" y="1" rx="3" ry="3" width="5rem" height="1.5rem" />

      <rect x="1" y="40" rx="3" ry="3" width="5rem" height="1.5rem" />
      <rect x="90" y="40" rx="3" ry="3" width="3rem" height="1.5rem" />
      <rect x="150" y="40" rx="3" ry="3" width="3rem" height="1.5rem" />
      <rect x="210" y="40" rx="3" ry="3" width="5rem" height="1.5rem" />
    </ContentLoader>
  </SkeletonContainer>
);
