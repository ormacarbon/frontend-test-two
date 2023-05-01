import React, { useState, type FC} from 'react'

import * as C from './TasksStyles'
import Modal from '../../components/modal'
import Button from '../../components/button'
import TaskCard from '../../components/task-card'
import Input from '../../components/input'

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

const Tasks: FC = () => {
  const [taskForm, setTaskForm] = useState<TaskForm>({ name: '', description: ''})
  const [taskFormState, setTaskFormState] = useState<TaskFormState>({ name: { state: true, feedback: '' }, description: { state: true, feedback: '' } })
  const [modalTitle, setModalTitle] = useState<string>('')
  const [modalDisplay, setModalDisplay] = useState<boolean>(false)
  const [taskIdToEdit, setTaskIdToEdit] = useState<number | null>(null)
  const [tasks, setTasks] = useState<Array<Task>>([
    { id: 1, task: 'test', description: 'test', created: 'teste', updated: 'test' },
    { id: 2, task: 'test', description: 'test', created: 'teste', updated: 'test' },
    { id: 3, task: 'test', description: 'test', created: 'teste', updated: 'test' }
  ])

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
          change={handleInputChange}
          state={taskFormState.name.state}
          invalidFeedback={taskFormState.name.feedback}
        />

        <Input
          name="description"
          label="Descrição"
          placeholder="Digite aqui"
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
