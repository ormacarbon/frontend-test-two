import styled, { ThemeProvider } from "styled-components";
import RecepieCard from "../RecepeCard/RecepeCard";
import { themeLightMode } from '../../theme/theme';
import { useRecoilValue } from "recoil";
import { listaDeReceitas } from "../../state/atom";

export default function Recommendations() {
  const receitas = useRecoilValue(listaDeReceitas)
  return (
    <ThemeProvider theme={themeLightMode}>
      <StyledRecommendations>
        <h2>
          Recommendations
        </h2>
        <div className="recommendations__grid-container">
          <div className="recommendations__grid-item principal">
            <RecepieCard
              title={receitas.length > 0 ? receitas[0].title : ''}
              img={receitas.length > 0 ? receitas[0].image : ''}
              to={receitas.length > 0 ? `/recipe/${receitas[0].id}`: '/'}
            />
          </div>
          <div className="recommendations__grid-item">
            <RecepieCard
              title={receitas.length > 0 ? receitas[1].title : ''}
              img={receitas.length > 0 ? receitas[1].image : ''}
              to={receitas.length > 0 ? `/recipe/${receitas[0].id}`: '/'}
            />
          </div>
          <div className="recommendations__grid-item">
            <RecepieCard
              title={receitas.length > 0 ? receitas[4].title : ''}
              img={receitas.length > 0 ? receitas[4].image : ''}
              to={receitas.length > 0 ? `/recipe/${receitas[0].id}`: '/'}
            />
          </div>
        </div>
      </StyledRecommendations>
    </ThemeProvider>
  )
}


const StyledRecommendations = styled.section`
padding: 2rem;
width: 80%;
margin: 0 auto;

h2{
    margin: 1rem 0;
}

.recommendations__grid-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 15px;
    width: 100%;

    .recommendations__grid-item{
        min-height: 200px;
    }

    .principal{
        grid-column: span 2;
        grid-row: span 2;
        height: 100%;
    }
}

@media screen and (max-width: 770px) {
    width: 100%;
    .recommendations__grid-container{
        grid-template-columns: 1fr 1fr;
    }
}

`