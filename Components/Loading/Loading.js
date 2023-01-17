import Image from "next/image";

function Loading({ loading }) {
  const urlLoading =
    "https://olaargentina.com/wp-content/uploads/2019/11/loading-gif-transparent-10.gif";

  return (
    <>
      {loading ? (
        <div className="loading">
          <Image
            src={urlLoading}
            width={200}
            height={200}
            alt="loading"
            loading="lazy"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Loading;
