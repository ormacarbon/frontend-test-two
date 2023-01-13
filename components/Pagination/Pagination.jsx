import { DivButtons } from "./style";

import ReactPaginate from "react-paginate";

export default function Pagination({ info,pageNumber, setPageNumber }) {

  const pagesNumber = info.pages



  const handleNextPage = () => {
    if(!info.next) return

    setPageNumber(pageNumber + 1)
  };

  const handlePrevPage = () => {

    if(!info.prev) return

    setPageNumber(pageNumber - 1)
  }

  return (
    // <DivButtons>
    //   <div>
    //     <button onClick={handlePrevPage}>clica</button>
    //   </div>
    //   <div>
    //       <button onClick={handleNextPage}>clica</button>
    //     </div>
    // </DivButtons>

    <DivButtons>
      <ReactPaginate 
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        breakLabel="..."
        nextLabel="Next"
        onPageChange={(info) => { setPageNumber(info.selected + 1) }}
        pageCount={info?.pages}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
      />
    </DivButtons>
  );
}

