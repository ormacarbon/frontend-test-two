import { useState } from "react";
import { Wrapper, Img, Skeleton } from "./styles";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <Wrapper>
      {skeleton && <Skeleton></Skeleton>}
      <Img onLoad={handleLoad} alt={alt} {...props} />
    </Wrapper>
  );
};

export default Image;
