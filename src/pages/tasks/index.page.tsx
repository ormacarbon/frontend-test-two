import React, {
  useState,
  useContext,
  useEffect
} from 'react'

import * as C from './styles'
import Modal from '../../components/modal'
import Button from '../../components/button'
import TaskCard from '../../components/task-card'
import Input from '../../components/input'

import { GetServerSideProps } from 'next'
import { AxiosResponse } from 'axios'
import { LoadingContext } from '../../context/LoadingContext'
import { useNavbarContext } from '../../context/NavbarContext'
import { notification } from 'antd'
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
  totalPagesContext: number;
}

const Tasks: React.FC<Props> = ({ data, totalPagesContext }) => {
  const { setIsLoading } = useContext(LoadingContext)
  const [taskForm, setTaskForm] = useState<TaskForm>({ name: '', description: ''})
  const [taskFormState, setTaskFormState] = useState<TaskFormState>({ name: { state: true, feedback: '' }, description: { state: true, feedback: '' } })
  const [modalTitle, setModalTitle] = useState<string>()
  const [modalAction, setModalAction] = useState<string>('add')
  const [modalDisplay, setModalDisplay] = useState<boolean>(false)
  const [taskIdToEdit, setTaskIdToEdit] = useState<number | null>(null)
  const [tasks, setTasks] = useState<Task[]>(data)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(totalPagesContext)
  const [search, setSearch] = useState<string>('')
  const [api, contextHolder] = notification.useNotification()
  const { setUserName } = useNavbarContext()

  useEffect(() => {
    const cookies = nookies.get()
    const userName = cookies.userName
    setUserName(userName)
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const openNotification = (message: string): void => {
    api.open({
      message: 'Erro!',
      description: message,
      duration: 4
    })
  }

  const getTasks = (page = 0, action = false):void => {
    setIsLoading(true)

    http.get(`/activities?${action ? `limit=${currentPage * 15}` : ''}${page > 0 ? `page=${page}` : ''}`)
      .then((response: AxiosResponse) => {
        const tasksRoute = response.data.data?.activities?.map((task : TaskGet) => {
          return {
            id: task.id,
            task: task.name,
            description: task.description,
            created: moment(task.created_at).format('DD/MM/YYYY'),
            updated: task.updated_at ? moment(task.updated_at).format('DD/MM/YYYY') : ''
          }
        })

        if (page > 0) {
          const totalTasks = [...tasks, ...tasksRoute].sort((a, b) => a.task.localeCompare(b.task))
          setCurrentPage(page)
          setTotalPages(response.data?.data.totalPages)
          setTasks([...totalTasks])
        } else if (action) {
          setTasks([...tasksRoute])
        }
        setIsLoading(false)
      })
      .catch(e => {
        console.error(e)
        setIsLoading(false)

        openNotification(e.response?.data)
      })
  }

  const validateFields = (): boolean => {
    Object.keys(taskForm).forEach((prop) => {
      taskFormState[prop].state = taskForm[prop] !== ''
      taskFormState[prop].feedback = taskForm[prop] === '' ? 'Campo obrigatório' : ''

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
          getTasks(0, true)
          clearFields()
          setModalDisplay(false)
        })
        .catch(e => {
          console.error(e)
          setIsLoading(false)

          if (e.response?.data === 'Activity name already registered!') {
            taskFormState.name.state = false
            taskFormState.name.feedback = 'Tarefa já existente'

            setTaskFormState({ ...taskFormState })
          }

          openNotification(e.response?.data)
        })
    }
  }

  const editTask = (): void => {
    const validation = validateFields()

    if (validation) {
      setIsLoading(true)
      http.put(`/activity/${taskIdToEdit}`, taskForm)
        .then(() => {
          getTasks(0, true)
          clearFields()
          setModalDisplay(false)
        })
        .catch(e => {
          console.error(e)
          setIsLoading(false)

          openNotification(e.response?.data)
        })

      setModalDisplay(false)
    }
  }

  const deleteTask = (id: number): void => {
    setIsLoading(true)

    http.delete(`/activity/${id}`)
      .then(() => getTasks(0, true))
      .catch(e => {
        console.error(e)
        setIsLoading(false)

        openNotification(e.response?.data)
      })
  }

  const handleInputChange = (newValue: string, inputName: string): void => {
    setTaskForm({ ...taskForm, [inputName]: newValue })
  }

  const clearFields = (): void => {
    setTaskForm({ ...taskForm, name: '', description: ''})
    setTaskFormState({ name: { state: true, feedback: '' }, description: { state: true, feedback: '' } })
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
      { contextHolder }
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

      <C.Input
        placeholder="Pesquise aqui"
        onChange={e => setSearch(e.target.value)}
      />

      <C.TasksContainer>
        {(search === '' && tasks.length > 0)
          ? tasks.map((task: Task, id: number) => (
            <TaskCard
              key={`task-${id}`}
              taskProp={task}
              handleTaskEditing={handleTaskEditing}
              deleteTask={deleteTask}
            />
          ))
          : (search !== '' && tasks.length > 0) && tasks.map((task: Task, id: number) => {
              if (task.task.match(search)) {
                return (
                  <TaskCard
                    key={`task-${id}`}
                    taskProp={task}
                    handleTaskEditing={handleTaskEditing}
                    deleteTask={deleteTask}
                  />
                )
              }

              return ''
            })}
      </C.TasksContainer>
      { totalPages > currentPage && <C.ShowMoreContainer>
        <Button
          option="salmon"
          label="Mostrar mais"
          onClick={() => getTasks(currentPage + 1, false)}
        />
      </C.ShowMoreContainer> }
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
    response = await http.get('/activities?page=1', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Beraer ${token}`,
        'user-id': `${userID}`
      }
    })
  } catch (e) {
    if (e.response?.status === 401) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
  }

  const totalPagesContext: number = response ? response.data?.data.totalPages : 0
  const data: Task[] | [] = response
    ? response.data?.data?.activities?.map((task: TaskGet) => {
      return {
        id: task.id,
        task: task.name,
        description: task.description,
        created: moment(task.created_at).format('DD/MM/YYYY'),
        updated: task.updated_at ? moment(task.updated_at).format('DD/MM/YYYY') : ''
      }
    }).sort((a: Task, b: Task) => a.task.localeCompare(b.task))
    : []

  return {
    props: {
      data,
      totalPagesContext
    }
  }
}
