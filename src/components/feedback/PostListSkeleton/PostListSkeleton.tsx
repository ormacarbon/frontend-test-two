import ContentLoader from "react-content-loader";
import { SkeletonContainer } from "../skeleton-contaner.style";

export const PostListSkeleton = () => (
  <span>
    {Array(8)
      .fill({})
      .map((_, index) => (
        <SkeletonContainer key={index}>
          <ContentLoader speed={2} width={"100%"} height={"12.5rem"}>
            <rect x="1" y="0" rx="1" ry="3" width="17rem" height="2rem" />

            <rect x="1" y="43" rx="3" ry="3" width="3rem" height="1rem" />
            <rect x="60" y="43" rx="3" ry="3" width="3rem" height="1rem" />
            <rect x="120" y="43" rx="3" ry="3" width="3rem" height="1rem" />

            <rect x="1" y="80" rx="3" ry="3" width="100%" height="0.5rem" />
            <rect x="1" y="95" rx="3" ry="3" width="100%" height="0.5rem" />
            <rect x="1" y="110" rx="3" ry="3" width="100%" height="0.5rem" />
            <rect x="1" y="125" rx="3" ry="3" width="100%" height="0.5rem" />
            <rect x="1" y="140" rx="3" ry="3" width="100%" height="0.5rem" />
            <rect x="1" y="155" rx="3" ry="3" width="100%" height="0.5rem" />

            <rect x="1" y="180" rx="3" ry="3" width="5rem" height="1rem" />
          </ContentLoader>
        </SkeletonContainer>
      ))}
  </span>
);
