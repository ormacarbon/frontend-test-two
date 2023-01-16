function Loading({ loading }) {
  const urlLoading =
    "https://olaargentina.com/wp-content/uploads/2019/11/loading-gif-transparent-10.gif";

  return (
    <>
      {" "}
      {loading ? (
        <div className="loading">
          <img src={urlLoading} alt="loading" loading="lazy" />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Loading;
