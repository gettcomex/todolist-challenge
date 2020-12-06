import React from 'react'
import { FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

import { Todo } from './styles'

function todo({ item: { id, name, status }, handleTodoStatus, deleteTodo }) {
  return (
    <Todo status={status}>
      <div className="header">
        <div className="icon-container">
          {status === 'in-progress' && <FaClock className="fa fa-clock" />}
          {status === 'complete' && (
            <FaCheckCircle className="fa fa-check-circle" />
          )}
          <span className="status">
            {status === 'in-progress' ? 'Em progresso' : 'Concluído'}
          </span>
        </div>
        <span className="date">2m</span>
      </div>
      <span className="title">{name}</span>
      <div className="buttons-container">
        {status === 'complete' && (
          <button
            type="button"
            className="button in-progress"
            onClick={() => handleTodoStatus(id, 'in-progress')}
          >
            <FaClock className="fa fa-check-circle" />
            <span>Em progresso</span>
          </button>
        )}
        {status === 'in-progress' && (
          <button
            type="button"
            className="button complete"
            onClick={() => handleTodoStatus(id, 'complete')}
          >
            <FaCheckCircle className="fa fa-check-circle" />
            <span>Concluir</span>
          </button>
        )}
        <button
          type="button"
          className="button delete"
          onClick={() => deleteTodo(id)}
        >
          <FaTimesCircle className="fa fa-times-circle" />
          <span>Deletar</span>
        </button>
      </div>
    </Todo>
  )
}

export default todo
