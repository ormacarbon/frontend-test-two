import styled from 'styled-components'
import { Menu } from 'antd'

interface NavbarContainerProps {
  isDarkMode: boolean;
}

export const NavbarContainer = styled.nav<NavbarContainerProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isDarkMode ? '#333' : '#fff')};
  color: ${(props) => (props.isDarkMode ? '#fff' : '#333')};
  height: 64px;
  padding: 0 24px;
  z-index: 5;
`

export const SwitchContainer = styled.div`
  display: flex;
`

export const SwitchLabel = styled.span`
padding-right: 7px;
font-size: 18px;
font-weight: bold;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.span`
  padding-right: 7px;
  font-size: 18px;
  font-weight: bold;
`

export const DropdownMenu = styled(Menu)`
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`
