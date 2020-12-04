import React, { useState, useEffect } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

import Filter from '../../components/filter'
import Todo from '../../components/todo'

import { Container, Header, Content, Label, Input } from './styles'

const todos = [
  { id: 0, name: 'Levar meu Macbook Pro para o conserto', status: 'complete' },
  { id: 1, name: 'Fazer compra do mês', status: 'in-progress' },
  { id: 2, name: 'Trocar lâmpada da garagem', status: 'in-progress' }
]

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'complete', label: 'Concluídas' },
  { key: 'in-progress', label: 'Em progresso ' }
]

function Home() {
  const [_todos, setTodos] = useState(todos)
  const [filteredTodos, setFilteredTodos] = useState(todos)
  const [filterValue, setFilterValue] = useState('all')
  const [inputValue, setInputValue] = useState('')
  const [inputFocus, setInputFocus] = useState(false)

  function handleFilteredTodos(key) {
    setFilteredTodos(
      _todos.filter(item => (key === 'all' ? item : item.status === key))
    )
  }

  function onPressFilter(key) {
    setFilterValue(key)
    handleFilteredTodos(key)
  }

  function handleInputChange(e) {
    setInputValue(e.target.value)

    if (e.key === 'Enter') {
      setTodos([
        { id: _todos.length, name: e.target.value, status: 'in-progress' },
        ..._todos
      ])

      setInputValue('')
    }
  }

  function handleTodoStatus(id, status) {
    setTodos(
      _todos.map(item => (item.id === id ? { ...item, status } : { ...item }))
    )
  }

  function deleteTodo(id) {
    setTodos(_todos.filter(item => item.id !== id))
  }

  useEffect(() => {
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
          {filters.map(filter => (
            <Filter
              key={filter.key.toString()}
              item={filter}
              filterValue={filterValue}
              onPressFilter={onPressFilter}
            />
          ))}
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
