import { useContext } from "react";
import loadingImage from "./loading.gif";
import { LoadingContext, Image } from "../index";

function Loading() {
  const { loading } = useContext(LoadingContext);

  if (loading)
    return (
      <div className="loading">
        <Image
          src={loadingImage}
          width={200}
          height={200}
          alt="loading"
          loading="lazy"
        />
      </div>
    );
}

export default Loading;
