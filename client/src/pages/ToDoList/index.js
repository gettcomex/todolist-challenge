import React, { useRef, useState, useEffect } from 'react'

import { Container, ListWrapper, ListItems, ListItem } from './styles'

export default function ToDoList() {
  const [originalTasks, setOriginalTasks] = useState([])
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState()
  // const [refs, setRefs] = useState([])
  const refs = useRef([])
  // const inputEl = useRef(null)
  // let refs = useRef([React.createRef(), React.createRef()])
  let clickTimeout = null

  useEffect(() => {
    // add or remove refs
    refs.current = refs.current.slice(0, tasks.length)
  }, [tasks])

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
      }, 2000)
    }
  }

  function handleVerifyKeyItem(e, position) {
    if (e.key === 'Enter') {
      refs.current[position].defaultValue = refs.current[position].value
      refs.current[position].readOnly = true
    }
    if (e.key === 'Escape') {
      refs.current[position].value = refs.current[position].defaultValue
      refs.current[position].readOnly = true
    }
  }

  function handleNewTask(e) {
    const id = Math.random()
    e.preventDefault()
    setOriginalTasks([...originalTasks,
      {
        id,
        description: newTask,
        created_at: Date.now(),
        isDone: false,
      }])
    setTasks([...tasks,
      {
        id,
        description: newTask,
        created_at: Date.now(),
        isDone: false,
      }])
    setNewTask('')
  }

  function handleFilterStatus(isDone) {
    if (isDone === undefined) {
      setTasks(originalTasks)
    } else {
      setTasks(originalTasks.filter(task => task.isDone === isDone))
    }
  }

  function handleChangeStatus(taskId) {
    const changeTaskStatus = tasks.find(task => task.id === taskId)
    changeTaskStatus.isDone = !changeTaskStatus.isDone
    const taskStatusIndex = tasks.findIndex(task => task.id === taskId)
    tasks[taskStatusIndex] = changeTaskStatus
    const originalTaskStatusIndex = originalTasks.findIndex(task => task.id === taskId)
    originalTasks[originalTaskStatusIndex] = changeTaskStatus
  }

  function handleRemoveTask(taskId) {
    const message = confirm('Deseja apagar essa tarefa?')
    if (message === true) {
      setOriginalTasks(originalTasks.filter(task => task.id !== taskId))
      setTasks(tasks.filter(task => task.id !== taskId))
    }
  }

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
                onChange={() => { handleChangeStatus(task.id) }}
              />
              <input
                className="taskInput"
                defaultValue={task.description}
                ref={(el) => { refs.current[i] = el }}
                readOnly
                onClick={() => { getClicks(i) }}
                onKeyDown={(e) => handleVerifyKeyItem(e, i)}
              />
              <button type="button" onClick={() => { handleRemoveTask(task.id) }}>X</button>
            </ListItem>
          ))}
        </ListItems>
      </ListWrapper>
    </Container>
  )
}
