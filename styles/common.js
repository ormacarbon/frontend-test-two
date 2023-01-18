import styled from "styled-components"

const urlImg = (thumb) => `${thumb.path}.${thumb.extension}`

export const Title = styled.h2`
  margin: 40px;
  font-size: 42px;
`

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Card = styled.div`
  background-color: #f1f1f1;
  height: 440px;
  width: 300px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

  h2,
  p {
    padding: 5px;
    text-align: justify;
  }

  &:hover {
    div#img {
      height: 100px;
    }
  }
`
export const Image = styled.div`
  height: 400px;
  width: 100%;
  transition: all 0.5s;

  ${(props) =>
    props.thumbnail &&
    css`
      background: url(${urlImg(props.thumbnail)}) no-repeat center;
      background-size: cover;
    `}
`

export const PaginateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0 30px;

  .pagination {
    display: flex;
    list-style-type: none;
  }

  .pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border: 1px solid #ddd;
    cursor: pointer;
  }

  .pagination li.selected,
  li.selected:hover {
    background-color: #ed1d24 !important;
    color: white;
    border: 1px solid #ed1d24;
    a {
      border: none;
      color: white;
    }
  }

  .pagination li:hover:not(.disabled) {
    background-color: #ddd;
  }

  .previous-link {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .next-link {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .disabled a {
    color: #a1a1a1;
    cursor: default;
  }
`
