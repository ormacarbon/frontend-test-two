import React, { useState, type FC, useContext, useEffect} from 'react'

import * as C from './TasksStyles'
import Modal from '../../components/modal'
import Button from '../../components/button'
import TaskCard from '../../components/task-card'
import Input from '../../components/input'

import { GetServerSideProps } from 'next'
import { AxiosResponse } from 'axios'
import { LoadingContext } from '../../context/loading-context'
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
  const { setIsLoading } = useContext(LoadingContext)
  const [taskForm, setTaskForm] = useState<TaskForm>({ name: '', description: ''})
  const [taskFormState, setTaskFormState] = useState<TaskFormState>({ name: { state: true, feedback: '' }, description: { state: true, feedback: '' } })
  const [modalTitle, setModalTitle] = useState<string>()
  const [modalAction, setModalAction] = useState<string>('add')
  const [modalDisplay, setModalDisplay] = useState<boolean>(false)
  const [taskIdToEdit, setTaskIdToEdit] = useState<number | null>(null)
  const [tasks, setTasks] = useState<Task[]>(data)

  useEffect(() => {
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTasks = (): Promise<void> => http.get('/activity')
    .then((response: AxiosResponse) => {
      const tasks = response.data.data?.map((task : TaskGet) => {
        return {
          id: task.id,
          task: task.name,
          description: task.description,
          created: moment(task.created_at).format('DD/MM/YYYY'),
          updated: task.updated_at ? moment(task.updated_at).format('DD/MM/YYYY') : ''
        }
      })

      setTasks(tasks)
      setIsLoading(false)
    })

  const validateFields = (): boolean => {
    Object.keys(taskForm).forEach((prop) => {
      if (taskForm[prop] === '') {
        taskFormState[prop].state = false
        taskFormState[prop].feedback = 'Campo obrigatório'
      } else {
        taskFormState[prop].state = true
        taskFormState[prop].feedback = ''
        if (prop === 'name') {
          taskFormState[prop].state = tasks.find(task => task.task === taskForm[prop]) === undefined
          taskFormState[prop].feedback = tasks.find(task => task.task === taskForm[prop]) === undefined ? '' : 'Tarefa já existente'
        }
      }
      setTaskFormState({ ...taskFormState })
    })
    const states = Object.keys(taskFormState).map((prop) => taskFormState[prop].state)

    return !states.includes(false)
  }

  const saveTask = (): void => {
    const validation = validateFields()

    if (validation) {
      setIsLoading(true)
      http.post('/activity', taskForm)
        .then(() => {
          getTasks()
          setModalDisplay(false)
        })
        .catch(e => {
          console.error(e)
          setIsLoading(false)
        })

      setModalDisplay(false)
    }
  }

  const editTask = (): void => {
    const validation = validateFields()

    if (validation) {
      setIsLoading(true)
      http.put(`/activity/${taskIdToEdit}`, taskForm)
        .then(() => {
          getTasks()
          setModalDisplay(false)
        })
        .catch(e => {
          console.error(e)
          setIsLoading(false)
        })

      setModalDisplay(false)
    }
  }

  const deleteTask = (id: number): void => {
    setIsLoading(true)

    http.delete(`/activity/${id}`)
      .then(() => getTasks())
      .catch(e => {
        console.error(e)
        setIsLoading(false)
      })
  }

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

    setModalAction(action)
    setModalTitle(title)
  }

  const handleTaskEditing = (id: number): void => {
    changeModalTitle('edit')
    setTaskIdToEdit(id)
    const { task, description } = tasks.find((task: Task) => task.id === id)
    setTaskForm({ name: task || '', description: description || ''})
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
        save={modalAction === 'add' ? saveTask : editTask}
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
            deleteTask={deleteTask}
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

  let data: Task[] | [] = []
  data = response
    ? response.data.data.map((task: TaskGet) => {
      return {
        id: task.id,
        task: task.name,
        description: task.description,
        created: moment(task.created_at).format('DD/MM/YYYY'),
        updated: task.updated_at ? moment(task.updated_at).format('DD/MM/YYYY') : ''
      }
    })
    : []

  return {
    props: {
      data
    }
  }
}
