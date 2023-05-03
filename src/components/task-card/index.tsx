import React, { type FC } from 'react'
import * as C from './styles'
import { Dropdown, Space, Tooltip, type MenuProps } from 'antd'

interface Task {
  id: number;
  task: string;
  description: string;
  created: string;
  updated: string;
}

interface Props {
  taskProp: Task;
  handleTaskEditing: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskCard: FC<Props> = ({ taskProp, handleTaskEditing, deleteTask }) => {
  const { id, task, description, created, updated } = taskProp
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={() => handleTaskEditing(id)}>
          Editar
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={() => deleteTask(id)}>
          Excluir
        </a>
      )
    }
  ]

  return (
    <C.CardContainer>
      <C.Container className="info-container">
        <C.Title className="text-ellipsis">Tarefa</C.Title>
        <Tooltip title={task} trigger="hover">
          <C.Info className="text-ellipsis">{ task }</C.Info>
        </Tooltip>
      </C.Container>

      <C.Container className="info-container">
        <C.Title className="text-ellipsis">Descrição</C.Title>
        <Tooltip title={description} trigger="hover">
          <C.Info className="text-ellipsis">
            { description }
          </C.Info>
        </Tooltip>
      </C.Container>

      <C.Container className="info-container">
        <C.Title>Criação</C.Title>
        <C.Info>{ created }</C.Info>
      </C.Container>

      <C.Container className="info-container">
        <C.Title>Atualização</C.Title>
        <C.Info>{ updated }</C.Info>
      </C.Container>

      <C.Container className="task-dropdown">
        <Dropdown menu={{ items }}>
            <Space>
              <C.Image src="dropdown-task-icon.svg"/>
            </Space>
        </Dropdown>
      </C.Container>
    </C.CardContainer>
  )
}

export default TaskCard
