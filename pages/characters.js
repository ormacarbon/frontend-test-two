//? Card component
import Card from "../components/Card/Card"

// API CALL
export async function getStaticProps () {

  const apiURL = 'https://rickandmortyapi.com/api/character'


  const res = await fetch(`${apiURL}?page=1`)
  const data = await res.json()

  return {
    props: {
      characters: data.results
    }
  }
}



export default function Characters({ characters }) {

  return (
    <div>
      <h1>Characters</h1>
      {!Characters ? <p>Carregando..</p> : <Card characters={characters}/>}
      
    </div>
  );
}
