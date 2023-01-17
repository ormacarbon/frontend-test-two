import styled, { css } from "styled-components"

const urlImg = (thumb) => `${thumb.path}.${thumb.extension}`

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
