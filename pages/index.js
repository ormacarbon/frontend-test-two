import { useEffect, useState } from "react"
import api from "../services/api"
import ReactPaginate from "react-paginate"
import {
  Card,
  CardWrapper,
  Container,
  Image,
  PaginateContainer,
  Title,
} from "../styles/common"

function Home() {
  const [characters, setCharacters] = useState([])
  const [itemOffset, setItemOffset] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const pageCount = Math.ceil(totalItems / 20)

  useEffect(() => {
    api
      .get("characters", { params: { offset: itemOffset } })
      .then((res) => {
        setCharacters(res.data.data.results)
        setTotalItems(res.data.data.total)
      })
      .catch((err) => console.log(err))
  }, [characters])

  const handlePageClick = (event) => {
    const newOffset = event.selected * 20
    setItemOffset(newOffset)
  }

  return (
    <>
      <Title>Characters</Title>
      <Container>
        <CardWrapper>
          {characters.map((character) => {
            return (
              <Card key={character.id}>
                <Image id="img" thumbnail={character.thumbnail} />
                <h2>{character.name}</h2>
                <p>{character.description}</p>
              </Card>
            )
          })}
        </CardWrapper>
        <PaginateContainer>
          <ReactPaginate
            onPageChange={handlePageClick}
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            containerClassName="pagination"
            previousLinkClassName="previous-link"
            nextLinkClassName="next-link"
          />
        </PaginateContainer>
      </Container>
    </>
  )
}

export default Home
