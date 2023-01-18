import styled from "styled-components"
import Link from "next/link"

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ed1d24;
  display: flex;
  align-items: center;
  padding: 30px;

  img {
    width: 180px;
    margin-right: 50px;
  }
`

export const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  margin-right: 20px;
  font-size: 24px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
