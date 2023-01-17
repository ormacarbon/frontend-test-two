import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { api } from '../../services/api';
import { Container } from './style';


const Pagination = (props) => {

    const [itemOffset, setItemOffset] = useState(0);

    /// const endOffset = itemOffset + itemsPerPage;
    /// console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    /// const currentItems = items.slice(itemOffset, endOffset);
    ///const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = async (event) => {
        console.log("Entrou na função")

        console.log("Name: ", props.product_name)

        const { data } = await api.get(`/products?page=${(event.selected + 1)}&query=${props.product_name}`)

        console.log(`User requested page number ${(event.selected + 1)}`)
        console.log(`Pagina atual ${data.current_page}`)

        props.setdataProducts(data)

    };

    return (
        <Container>
            <ReactPaginate
                breakLabel=""
                className="container_className"
                disableInitialCallback={true}
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