import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dataContext from "./dataContext";

const DataProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);
  const fetchData = (property) => {
    //console.log("Fetching data...");
    fetch("https://api.chess.com/pub/leaderboards")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBoard(data[property]);
      });
  };

  useEffect(() => {
    if (router.route === "/daily") {
      fetchData("daily");
    } else if (router.route === "/blitz") {
      fetchData("live_blitz");
    } else if (router.route === "/live_bullet") {
      fetchData("live_bullet");
    }
  }, [router.route]);

  return (
    <dataContext.Provider
      value={{ board, setBoard, fetchData, selectedItem, setSelectedItem }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
