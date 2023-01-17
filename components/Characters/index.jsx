import { useEffect, useState } from "react"
import api from "../../services/api"
import * as S from "./styles"

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

  console.log("resposta", characters)
  return (
    <S.Container>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              {console.log(character)}
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={`Image of ${character.name}`}
              />
              <span className="name">{character.name}</span>
              <span className="description">{character.description}</span>
            </li>
          )
        })}
      </ul>
    </S.Container>
  )
}
