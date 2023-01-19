import DataProvider from "../../context/DataProvider";
import Cards from "../Cards";
import { LeaderboardsView } from "./styles";

const Leaderboards = () => {
  return (
    <LeaderboardsView>
      <DataProvider>
        <Cards />
      </DataProvider>
    </LeaderboardsView>
  );
};

export default Leaderboards;
