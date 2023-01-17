import Image from "next/image";
import loadingImage from "./loading.gif";

function Loading({ loading }) {
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
