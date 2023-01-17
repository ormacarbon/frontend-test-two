import { useEffect, useState } from "react"
import api from "../../services/api"
import * as S from "./styles.jsx"

export default function Characters() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    api
      .get("/characters")
      .then((res) => {
        setCharacters(res.data.data.results)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <S.Container>
      <S.CardWrapper>
        {characters.map((character) => {
          return (
            <S.Card key={character.id}>
              <S.Image id="img" thumbnail={character.thumbnail} />
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </S.Card>
          )
        })}
      </S.CardWrapper>
    </S.Container>
  )
}
