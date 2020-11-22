import React, { useRef, useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import { Container, ListWrapper, ListItems, ListItem } from './styles'

export default function ToDoList() {
  const [originalTasks, setOriginalTasks] = useState([])
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState()
  const refs = useRef([])
  let clickTimeout = null
  const getTasksQuery = gql`query {
    tasks {
      id
      description
      isDone
    }
  }`

  const createTaskQuery = gql`mutation ($description: String!, $isDone: Boolean!){
    createTask(input: {description: $description, isDone: $isDone}){
      task {
        id,
        description,
        isDone
      }
    }
  }`

  const updateTaskDescriptionQuery = gql`mutation ($id: ID!, $description: String!){
    updateTaskDescription(input: {id: $id, description: $description}){
      tasks {
        id,
        description,
        isDone
      }
    }
  }`

  const updateTaskStatusQuery = gql`mutation ($id: ID!, $isDone: Boolean!){
    updateTaskStatus(input: {id: $id, isDone: $isDone}){
      tasks {
        id,
        description,
        isDone
      }
    }
  }`

  const deleteTaskQuery = gql`mutation ($id: ID!) {
    deleteTask(input:{id: $id}) {
      success
    }
  }`

  const { loading, error, data } = useQuery(getTasksQuery)
  const [updateTaskDescription] = useMutation(updateTaskDescriptionQuery)
  const [updateTaskStatus] = useMutation(updateTaskStatusQuery)
  const [createTask] = useMutation(createTaskQuery)
  const [deleteTask] = useMutation(deleteTaskQuery)

  async function handleUpdateTaskDescription(id, description) {
    updateTaskDescription({ variables: { id, description } }).then(responseData => {
      setOriginalTasks(responseData.data.updateTaskDescription.tasks)
    })
  }

  async function handleUpdateTaskStatus(id, isDone) {
    updateTaskStatus({ variables: { id, isDone } }).then(responseData => {
      setOriginalTasks(responseData.data.updateTaskStatus.tasks)
    })
  }

  async function handleDeleteTask(id) {
    deleteTask({ variables: { id } })
  }

  useEffect(() => {
    if (tasks !== undefined) {
      refs.current = refs.current.slice(0, tasks.length)
    }
  }, [tasks])

  useEffect(() => {
    if (data !== undefined) {
      setOriginalTasks(data.tasks)
      setTasks(data.tasks)
    }
  }, [data])

  function setReadOnly(position) {
    refs.current[position].readOnly = false
  }

  function getClicks(position) {
    if (clickTimeout !== null) {
      setReadOnly(position)
      clearTimeout(clickTimeout)
      clickTimeout = null
    } else {
      clickTimeout = setTimeout(() => {
        clearTimeout(clickTimeout)
        clickTimeout = null
      }, 500)
    }
  }

  function handleVerifyKeyItem(e, position, taskId) {
    if (e.key === 'Enter') {
      handleUpdateTaskDescription(taskId, refs.current[position].value)
      refs.current[position].readOnly = true
    }
    if (e.key === 'Escape') {
      refs.current[position].value = refs.current[position].defaultValue
      refs.current[position].readOnly = true
    }
  }

  async function handleNewTask(e) {
    e.preventDefault()
    createTask({ variables: { description: newTask, isDone: false } }).then(responseData => {
      setOriginalTasks([...originalTasks, responseData.data.createTask.task])
      setTasks([...tasks, responseData.data.createTask.task])
    })
    setNewTask('')
  }

  function handleFilterStatus(isDone) {
    if (isDone === undefined) {
      setTasks(originalTasks)
    } else {
      setTasks(originalTasks.filter(task => task.isDone === isDone))
    }
  }

  function handleChangeStatus(taskId, isDone) {
    handleUpdateTaskStatus(taskId, isDone)
  }

  function handleRemoveTask(taskId) {
    const message = confirm('Deseja apagar essa tarefa?')
    if (message === true) {
      handleDeleteTask(taskId)
      setOriginalTasks(originalTasks.filter(task => task.id !== taskId))
      setTasks(tasks.filter(task => task.id !== taskId))
    }
  }

  if (loading) {
    return (<p>Loading...</p>)
  }

  if (!error && data.tasks !== undefined) {
    return (
      <Container>
        <ListWrapper>
          <form onSubmit={handleNewTask}>
            <p>To-Do List :D</p>
            <input
              placeholder="O que precisa ser feito?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </form>
          <ListItems>
            <div className="listItemsOptions">
              <button type="button" onClick={() => { handleFilterStatus() }}>Todas</button>
              <button type="button" onClick={() => { handleFilterStatus(false) }}>Em andamento</button>
              <button type="button" onClick={() => { handleFilterStatus(true) }}>Concluídas</button>
            </div>
            {tasks.map((task, i) => (
              <ListItem key={task.id}>
                <input
                  className="completeTaskCheckbox"
                  type="checkbox"
                  defaultChecked={task.isDone}
                  onChange={() => { handleChangeStatus(task.id, !task.isDone) }}
                />
                <input
                  className="taskInput"
                  defaultValue={task.description}
                  ref={(el) => { refs.current[i] = el }}
                  readOnly
                  onClick={() => { getClicks(i) }}
                  onKeyDown={(e) => handleVerifyKeyItem(e, i, task.id)}
                />
                <button type="button" onClick={() => { handleRemoveTask(task.id) }}>X</button>
              </ListItem>
            ))}
          </ListItems>
        </ListWrapper>
      </Container>
    )
  }
}
