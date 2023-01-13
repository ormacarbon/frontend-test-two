import { DivButtons } from "./style";

import ReactPaginate from "react-paginate";

export default function Pagination({ info,pageNumber, setPageNumber }) {



  return (


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

