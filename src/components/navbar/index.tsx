import React from 'react'
import * as C from './styles'

import { MenuOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Switch } from 'antd'
import { useNavbarContext } from '../../context/NavbarContext'
import { removeAuthTokenAndUserID } from '../../axios/axiosConfig'
import { useRouter } from 'next/router'

const Navbar: React.FC = () => {
  const { isDarkMode, toggleDarkMode, username } = useNavbarContext()
  const router = useRouter()

  const logout = (): void => {
    removeAuthTokenAndUserID()
    router.push('/login')
  }

  const redirectToTasks = (): void => {
    router.push('/tasks')
  }

  const menu = (
    <C.DropdownMenu>
      <Menu.Item
        key="tasks"
        onClick={redirectToTasks}
      >
        Minhas tarefas
      </Menu.Item>
      <Menu.Item
        key="logout"
        onClick={logout}
      >
        Sair
      </Menu.Item>
    </C.DropdownMenu>
  )

  return (
    <C.NavbarContainer isDarkMode={isDarkMode}>
      <C.SwitchContainer>
        <C.SwitchLabel>Modo</C.SwitchLabel>
        <Switch checked={isDarkMode} onChange={toggleDarkMode} />
      </C.SwitchContainer>
      <C.UserContainer>
        {username !== '' && (
          <Dropdown overlay={menu} trigger={['click']}>
            <a href="#">
              <C.Name>{username}</C.Name>
              <MenuOutlined />
            </a>
          </Dropdown>
        )}
      </C.UserContainer>
    </C.NavbarContainer>
  )
}

export default Navbar
