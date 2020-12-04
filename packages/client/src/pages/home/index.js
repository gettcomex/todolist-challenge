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
  const [_todos] = useState(todos)
  const [selectedFilter, setSelectedFilter] = useState(new Map())
  const [inputFocus, setInputFocus] = useState(false)

  function onPressFilter(key) {
    const selectedItem = new Map()
    selectedItem.set(key, !selectedFilter.get(key))

    setSelectedFilter(selectedItem)
  }

  function handleInputChange(e) {
    if (e.key === 'Enter') {
      console.log(e.target.value)
    }
  }

  function handleTodoStatus(id, status) {
    console.log(id, status)
  }

  function deleteTodo(id) {
    console.log(id)
  }

  useEffect(() => {
    onPressFilter('all')
  }, [])

  return (
    <Container>
      <Header>
        <Label focus={inputFocus}>
          <FaPlusCircle className="fa fa-plus-circle" />
          <Input
            name="todo"
            type="text"
            placeholder="Criar uma tarefa"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            onKeyDown={handleInputChange}
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
              selected={!!selectedFilter.get(filter.key)}
              onPressFilter={onPressFilter}
            />
          ))}
        </div>
        <div className="todos">
          {_todos.map(todo => (
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
