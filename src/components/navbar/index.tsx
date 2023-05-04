import React, { ReactNode } from 'react'
import * as C from './styles'

import { MenuOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import { useNavbarContext } from '../../context/NavbarContext'
import { removeAuthTokenAndUserID } from '../../axios/axiosConfig'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  const { username, setUserName } = useNavbarContext()
  const router = useRouter()

  const logout = (): void => {
    removeAuthTokenAndUserID()
    setUserName('')
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
    <C.NavbarContainer>
      <C.SwitchContainer>
        <C.SwitchLabel>Theme</C.SwitchLabel>
        { children }
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
