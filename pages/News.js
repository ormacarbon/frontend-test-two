import styled from 'styled-components'
import Head from 'next/head'
export default function News(){
  const Fez = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.8rem;
    h1 {
      font-weight: bold;
    }
  `

  return(
      <>
      <Head>
      <title>Fatos Históricos</title>
      <meta name="description" content="Fatos Historicos"></meta>
      </Head>
      <Fez>
        <h1>Iraque declara feriado por extremo calor</h1>
        <p>Em 4 de julho, as autoridades do Iraque anunciaram um feriado, incluindo a capital Bagdá, porque estava simplesmente muito quente para trabalhar ou estudar, depois que as temperaturas ultrapassaram os 50 graus Celsius e seu sistema elétrico entrou em colapso.</p>
      </Fez>
      <Fez>
        <h1>Tornados no sul dos Estados Unidos</h1>
        <p>A tempestade tropical Elsa atingiu partes do sudeste dos Estados Unidos com tornados, de acordo com  relatos, enquanto continuava seu caminho em direção a Nova York.
         Um possível tornado atingiu a Base Naval Submarina de Kings Bay em Kings Bay, Geórgia, na noite de 7 de julho, resultando em relatos de múltiplos ferimentos e danos. Muitos dos feridos foram levados a instalações médicas locais para tratamento, de acordo com a base. Outros tornados foram registrados no norte da Flórida e no sudoeste da Geórgia.</p>
      </Fez>
      <Fez>
        <h1>“Tsunami” de lama no centro do Japão</h1>
        <p>No início de julho, chuvas torrenciais provocaram um poderoso deslizamento de terra em Atami, província de Shizuoka, cerca de 90 quilômetros a sudoeste de Tóquio, Japão. O deslizamento de terra destruiu cerca de 130 edifícios.
        O Japão está sujeito a avalanches, com média de 1.500 por ano na última década, um aumento de quase 50% em comparação com os 10 anos anteriores, de acordo com um relatório do governo japonês de 2020.
        Desastres relacionados a enchentes, como deslizamentos de terra, são um risco tradicional, mas sério para o país. Isso ocorre porque metade da população japonesa e 75% dos ativos do país estão concentrados em áreas sujeitas a inundações, dizem os especialistas.</p>
      </Fez>
      </>
  )
}