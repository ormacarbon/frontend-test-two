import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 20px;
  padding: 10px;

  a {
    text-decoration: none;
  }
`
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
