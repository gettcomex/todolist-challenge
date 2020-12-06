import React, { useState, useEffect } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import useSkipFirstRender from '../../utils/useSkipFirstRender'
import { API_URL } from '../../constants'

import Filter from '../../components/filter'
import Todo from '../../components/todo'

import { Container, Header, Content, Label, Input } from './styles'

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'complete', label: 'Concluídas' },
  { key: 'in-progress', label: 'Em progresso ' }
]

function Home() {
  const [_todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filterValue, setFilterValue] = useState('all')
  const [inputValue, setInputValue] = useState('')
  const [inputFocus, setInputFocus] = useState(false)

  function handleInputChange(e) {
    setInputValue(e.target.value)

    if (e.key === 'Enter') {
      fetch(`${API_URL}/todos`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ name: e.target.value })
      })
        .then(res => res.json())
        .then(res => {
          setTodos([res, ..._todos])
          setInputValue('')
        })
    }
  }

  function handleTodoStatus(id, status) {
    fetch(`${API_URL}/todos/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify({ status })
    }).then(() => {
      setTodos(
        _todos.map(item => (item.id === id ? { ...item, status } : item))
      )
    })
  }

  function deleteTodo(id) {
    fetch(`${API_URL}/todos/${id}`, { method: 'DELETE' }).then(() => {
      setTodos(_todos.filter(item => item.id !== id))
    })
  }

  function handleFilteredTodos(key) {
    setFilteredTodos(
      _todos.filter(item => (key === 'all' ? item : item.status === key))
    )
  }

  function onPressFilter(key) {
    setFilterValue(key)
    handleFilteredTodos(key)
  }

  function getTodos() {
    fetch(`${API_URL}/todos`, { method: 'GET' })
      .then(res => res.json())
      .then(setTodos)
  }

  useEffect(() => {
    getTodos()
  }, [])

  useSkipFirstRender(() => {
    onPressFilter(filterValue)
  }, [_todos])

  return (
    <Container>
      <Header>
        <Label focus={inputFocus}>
          <FaPlusCircle className="fa fa-plus-circle" />
          <Input
            name="todo"
            type="text"
            placeholder="Criar uma tarefa"
            onChange={handleInputChange}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            onKeyDown={handleInputChange}
            value={inputValue}
          />
        </Label>
      </Header>
      <Content>
        <div className="filters">
          <span>Status</span>
          <div className="buttons-container">
            {filters.map(filter => (
              <Filter
                key={filter.key.toString()}
                item={filter}
                filterValue={filterValue}
                onPressFilter={onPressFilter}
              />
            ))}
          </div>
        </div>
        <div className="todos">
          {filteredTodos.map(todo => (
            <Todo
              key={todo.id.toString()}
              item={todo}
              handleTodoStatus={handleTodoStatus}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </Content>
    </Container>
  )
}

export default Home
