//? Styled Components
import { DivButtons } from "./style";
//? React Paginate Component
import ReactPaginate from "react-paginate";

export default function Pagination({ info,pageNumber, setPageNumber }) {

  const handlePageChange = (info) => {

    setPageNumber(info.selected + 1) 
    window.scrollTo(0, 0) 

  }


  return (


    <DivButtons>
      <ReactPaginate 
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageChange}
        pageCount={info?.pages}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
      />
    </DivButtons>
  );
}

