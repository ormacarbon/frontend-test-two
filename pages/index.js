import { Coin } from "../Components/MarketCoins/Coin";
import {
  Container,
  TableCoins,
  TableCoinsContainer,
} from "../Components/MarketCoins/styles";
import { useApi } from "../hooks/useApi";
import { SectionTitle } from "../Components/SectionTitle/SectionTitle";

export default function Home() {
  const {response} = useApi(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  return (
    <main>
      <TableCoins>
        <Container>
          <div className="text">
            <SectionTitle title="Market" />
          </div>
          <TableCoinsContainer>
            {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
          </TableCoinsContainer>
        </Container>
      </TableCoins>
    </main>
  );
}
