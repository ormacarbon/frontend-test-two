import { useContext } from "react";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import Loading from "../components/Loading/Loading";
import { ThemeContext } from "../contexts/themeContext";
import { useFetch } from "../hooks/useFetch";
import useLocation from "../hooks/useLocation";
import * as C from "../styles/PagesStyles/Home";

const Index = () => {
  const { theme } = useContext(ThemeContext);
  const { latitude, longitude } = useLocation();

  const {
    data: weather,
    error,
    loading,
  } = useFetch(`/api/weather?latitude=${latitude}&longitude=${longitude}`);
  const { data } = useFetch(
    `/api/forecast?latitude=${latitude}&longitude=${longitude}`
  );

  return (
    <C.ContainerHome theme={theme}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Banner data={weather} />
          <C.Cards>
            {data?.list.map((forecast, index) => (
              <Cards key={index} forecast={forecast} />
            ))}
          </C.Cards>
        </>
      )}
    </C.ContainerHome>
  );
};

export default Index;
