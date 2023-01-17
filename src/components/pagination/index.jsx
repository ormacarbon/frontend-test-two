import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { api } from '../../services/api';
import { Container } from './style';


const Pagination = (props) => {

    const handlePageClick = async (event) => {

        const { data } = await api.get(`/products?page=${(event.selected + 1)}&query=${props.product_name}`)

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