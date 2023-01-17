import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Container } from './style';


const Pagination = (props) => {

    console.log("props: ", props.pageCount);

    const [itemOffset, setItemOffset] = useState(0);

    /// const endOffset = itemOffset + itemsPerPage;
    /// console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    /// const currentItems = items.slice(itemOffset, endOffset);
    ///const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        // const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        // setItemOffset(newOffset);

        console.log(`User requested page number ${event.selected}`)
    };

    return (
        <Container>
            <ReactPaginate
                breakLabel=""
                className="container_className"
                marginPagesDisplayed={0}
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={props.pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </Container>

    )
}
export { Pagination };