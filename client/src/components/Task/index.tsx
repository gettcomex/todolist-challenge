import React, { useContext, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { HiTrash } from 'react-icons/hi';
import { TaskListContext } from '../../hooks/tasks';
import { TaskCard } from './styles';

const ALL_TASKS = gql`
  {
    todos {
      title
      id
      finished
    }
  }
  `;

export const Tasks: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_TASKS);
  const { tasks, removeTask, findTask, changeStatus } = useContext(TaskListContext);
  const [isEditing, setEditing] = useState(false);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id}>
          <div aria-hidden="true" onClick={() => setEditing(!isEditing)} onDoubleClick={() => findTask(task.id)}>{task.title}</div>
          <span aria-hidden="true" onClick={() => changeStatus(task.id)}>{task.finished ? ('Tarefa completa') : 'Tarefa em andamento'}</span>
          <HiTrash onClick={() => window.confirm('Tem certeza que quer deletar essa tarefa?') && removeTask(task.id)} />
        </TaskCard>
      ))}
      {data.todos.map((todo: { id: string; title: string; }) => (
        <TaskCard key={todo.id}>
          {todo.title}
        </TaskCard>
      ))}
    </>
  );
};
