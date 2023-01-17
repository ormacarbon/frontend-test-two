import { useEffect } from "react";

const Head = ({ title }) => {
  useEffect(() => {
    if (title) document.title = title;
    else document.title = "GetNews";
  }, [title]);
  return null;
};

export default Head;
