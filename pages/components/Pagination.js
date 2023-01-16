import React from 'react'
import styled from 'styled-components'

const Paginations = styled.div`
    display: flex;
    margin-left: 50%;
    padding: 0;

    @media (max-width:768px) {
        margin-left: 50%;
    }
    @media (max-width:768px) {
        margin-left: 20%;
    }
    button{
        width: 40px;
        height: 20px;
        margin-right: 1em;
    }
`

export default function Pagination({setCurrentPage, pages}) {
  return (
    <>
    <Paginations>
    {Array.from(Array(pages), (item, index) => {
        return <button key={index} value={index} onClick={(e) => setCurrentPage(e.target.value)}>{index + 1}</button>
      })}
      </Paginations>
      </>
  )
}
