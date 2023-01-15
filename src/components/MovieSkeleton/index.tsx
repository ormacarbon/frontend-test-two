import { ComponentProps } from "react";
import { MovieSkeletonContainer, SkeletonItem } from "./styles";

type ProductSkeletonProps = ComponentProps<typeof MovieSkeletonContainer>

export function ProductSkeleton({...props}: ProductSkeletonProps){
  return (
    <MovieSkeletonContainer {...props}>
      <SkeletonItem />
      <div>
        <SkeletonItem />
      </div>
    </MovieSkeletonContainer>
  )
}