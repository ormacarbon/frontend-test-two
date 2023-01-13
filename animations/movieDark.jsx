import Lottie from "lottie-react";
import movie from "./movieDark.json";

export const MovieDark = () => {
  return (
    <Lottie
      animationData={movie}
      loop={true}
      style={{
        width: "400px",
      }}
    />
  );
};
