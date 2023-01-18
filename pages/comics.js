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

function Comics() {
  const [comics, setComics] = useState([])
  const [itemOffset, setItemOffset] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const pageCount = Math.ceil(totalItems / 20)

  useEffect(() => {
    api
      .get("comics", { params: { offset: itemOffset } })
      .then((res) => {
        setComics(res.data.data.results)
        setTotalItems(res.data.data.total)
      })
      .catch((err) => console.log(err))
  }, [comics])

  const handlePageClick = (event) => {
    const newOffset = event.selected * 20
    setItemOffset(newOffset)
  }

  return (
    <>
      <Title>Comics</Title>
      <Container>
        <CardWrapper>
          {comics.map((comic) => {
            return (
              <Card key={comic.id}>
                <Image id="img" thumbnail={comic.thumbnail} />
                <h2>{comic.title}</h2>
                <p>{comic.description}</p>
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

export default Comics
