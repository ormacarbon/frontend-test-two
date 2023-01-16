import styled from 'styled-components'
import Link from 'next/link'
export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 50px;
  display: flex;
  background: ${({ theme }) => theme.body};
  justify-content: space-between;
  
`
export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  font-size: 1.5rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: right;
  margin-right: -25px;
`

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`