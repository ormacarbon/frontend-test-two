import { useRouter } from "next/router";
import { useState } from "react"
import { GotCard } from "../../src/components/GotCard";
import { ButtonSearch, CardsContainer, Container, FilterInput, SearchContainer, ItemsAmount } from "./styles";

interface CharactersProps {
  name: string;
  born: string;
  titles: string[];
  culture: string;
  url: string;
}


export default function GOT({ data }) {
  const router = useRouter()
  const { page, pathname } = router.query;

  const characters: CharactersProps[] = data
  const [filterInput, setFilterInput] = useState('')
  

  const charactersFiltered = characters.filter(item => item.name.toLowerCase().includes(filterInput.toLowerCase()))

  const pageNumber = Number(page)

  function handlePreviousPage() {
    if (pageNumber <= 1) {
      alert("There's no more pages going backwards")
      return
    }
    
    router.push(
      `/${pathname}?page=${Number(page) - 1}`,
      `/gotItems?page=${Number(pageNumber) - 1}`,
      {
        shallow: true
      }
    )

    setFilterInput('')
  }

  function handleNextPage() {
    router.push(
      `/${pathname}`,
      `/gotItems?page=${Number(pageNumber) + 1}`,
      {
        shallow: true
      }
    )

    setFilterInput('')
  }

  return (
    <Container>
      <SearchContainer>
      <ButtonSearch type='button' onClick={handlePreviousPage}>Previous</ButtonSearch>
      <FilterInput
        type="text"
        onChange={e => setFilterInput(e.target.value)}
        value={filterInput}
        placeholder='Search...'
        />
        <ButtonSearch type='button' onClick={handleNextPage}>Next</ButtonSearch>
      </SearchContainer>
        <ItemsAmount>{`Items (${charactersFiltered.length})`}</ItemsAmount>
      <CardsContainer>
        {charactersFiltered?.map(character => {
          return (
            <GotCard
              key={character.url}
              name={character.name}
              titles={character.titles}
              born={character.born}
              culture={character.culture} />
        )
      })}

      </CardsContainer>
    </Container>
  )
}

 export async function getServerSideProps ({ query }) {
  const { page = 2 } = query
  
  const res = await fetch(`${process.env.API_URL}?page=${page}&pageSize=15`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}