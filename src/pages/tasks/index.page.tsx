import React, { useState, type FC} from 'react'

import * as C from './TasksStyles'
import Modal from '../../components/modal'
import Button from '../../components/button'
import TaskCard from '../../components/task-card'
import Input from '../../components/input'

import { GetServerSideProps } from 'next'
import { AxiosResponse } from 'axios'
import nookies from 'nookies'
import http from '../../axios/axiosConfig'
import moment from 'moment'

enum ActivityAction {
  Edit = 'edit',
  Add = 'add'
}

interface TaskForm {
  name: string;
  description: string;
}

interface TaskFormState {
  name: {
    state: boolean;
    feedback: string;
  }

  description: {
    state: boolean;
    feedback: string;
  }
}

interface Task {
  id: number;
  task: string;
  description: string;
  created: string;
  updated: string;
}

interface TaskGet {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
interface Props {
  data: Task[];
}

const Tasks: FC<Props> = ({ data }) => {
  const [taskForm, setTaskForm] = useState<TaskForm>({ name: '', description: ''})
  const [taskFormState, setTaskFormState] = useState<TaskFormState>({ name: { state: true, feedback: '' }, description: { state: true, feedback: '' } })
  const [modalTitle, setModalTitle] = useState<string>('')
  const [modalDisplay, setModalDisplay] = useState<boolean>(false)
  const [taskIdToEdit, setTaskIdToEdit] = useState<number | null>(null)
  const [tasks, setTasks] = useState<Task[]>(data)
  console.log(tasks)

  const handleInputChange = (newValue: string, inputName: string): void => {
    setTaskForm({ ...taskForm, [inputName]: newValue })
  }

  const clearFields = (): void => {
    setTaskForm({ ...taskForm, name: '', description: ''})
  }

  const changeModalTitle = (action: string): void => {
    let title: string

    switch (action) {
      case ActivityAction.Add:
        title = 'Adicionar Tarefa'
        break
      case ActivityAction.Edit:
        title = 'Editar Tarefa'
        break
      default:
        title = ''
        break
    }

    setModalTitle(title)
  }

  const handleTaskEditing = (id: number): void => {
    changeModalTitle('edit')
    setTaskIdToEdit(id)
    setModalDisplay(true)
  }

  const handleTaskAdding = () => {
    changeModalTitle('add')
    setModalDisplay(true)
  }

  return (
    <C.Card>
      <Modal
        display={modalDisplay}
        setDisplay={setModalDisplay}
        title={modalTitle}
        clearFields={clearFields}
      >
        <Input
          name="name"
          label="Tarefa"
          placeholder="Digite aqui"
          value={taskForm.name}
          change={handleInputChange}
          state={taskFormState.name.state}
          invalidFeedback={taskFormState.name.feedback}
        />

        <Input
          name="description"
          label="Descrição"
          placeholder="Digite aqui"
          value={taskForm.description}
          change={handleInputChange}
          state={taskFormState.description.state}
          invalidFeedback={taskFormState.description.feedback}
        />
      </Modal>

      <C.Container>
        <C.Title>Minhas tarefas</C.Title>
        <Button
          label="Nova Atividade"
          option="white"
          onClick={() => handleTaskAdding()}
        />
      </C.Container>

      <C.TasksContainer>
        {tasks.length > 0 && tasks.map((task: Task, id: number) => (
          <TaskCard
            key={`task-${id}`}
            taskProp={task}
            handleTaskEditing={handleTaskEditing}
          />
        ))}
      </C.TasksContainer>
    </C.Card>
  )
}

export default Tasks

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const cookies = nookies.get(context)
  const token = cookies.token
  const userID = cookies.userID
  let response: AxiosResponse

  try {
    response = await http.get('/activity', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Beraer ${token}`,
        'user-id': `${userID}`
      }
    })
  } catch (e) {
    if (e.response.status === 401) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
  }

  const data: Task[] = response.data.data.map((task: TaskGet) => {
    return {
      ...task,
      task: task.name,
      created: moment(task.created_at).format('DD/MM/YYYY'),
      updated: task.updated_at ? moment(task.updated_at).format('DD/MM/YYYY') : ''
    }
  })

  return {
    props: {
      data
    }
  }
}
