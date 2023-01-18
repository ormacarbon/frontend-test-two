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

function Events() {
  const [events, setEvents] = useState([])
  const [itemOffset, setItemOffset] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const pageCount = Math.ceil(totalItems / 20)

  useEffect(() => {
    api
      .get("events", { params: { offset: itemOffset } })
      .then((res) => {
        setEvents(res.data.data.results)
        setTotalItems(res.data.data.total)
      })
      .catch((err) => console.log(err))
  }, [events])

  const handlePageClick = (event) => {
    const newOffset = event.selected * 20
    setItemOffset(newOffset)
  }

  return (
    <>
      <Title>Comics</Title>
      <Container>
        <CardWrapper>
          {events.map((event) => {
            return (
              <Card key={event.id}>
                <Image id="img" thumbnail={event.thumbnail} />
                <h2>{event.title}</h2>
                <p>{event.description}</p>
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

export default Events
