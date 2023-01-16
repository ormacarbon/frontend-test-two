import styled from "styled-components"

const Body = styled.article`
    display: flex;
    width: 270px;
    min-height: 140px;
    margin: 10px;
    padding: 1rem;
    border: 1px solid #000000;
    box-shadow: .5rem .5rem 0 black;
    border-radius: 3px;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Itemlist = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 0;
    list-style: none;

    span{
        font-weight: bold;
    }
`

const Item = styled.li`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 3px;


    h3{
        text-transform: uppercase;
    }
`


export { Body, Itemlist, Item }