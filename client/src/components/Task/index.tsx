import React, { useContext, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { HiTrash } from 'react-icons/hi';
import { TaskListContext } from '../../hooks/tasks';
import { TaskCard, Input, Filter } from './styles';

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
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState({});

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const filteredTasks = tasks.filter((task) => (
    task.title.toLocaleLowerCase().includes(search.toLowerCase())));

  const finishedTasks = tasks.filter((task) => (
    task.finished === true
  ));

  const unfinishedTasks = tasks.filter((task) => (
    task.finished === false
  ));

  function showFinished() {
    setFiltered(finishedTasks);
  }

  function showUnFinished() {
    setFiltered(unfinishedTasks);
  }

  return (
    <>
      <Filter>
        <input onClick={() => setSearch('')} type="button" value="Todas as tarefas" />
        <input onClick={() => showFinished()} type="button" value="Em andamento" />
        <input onClick={() => showUnFinished()} type="button" value="Concluídas" />
      </Filter>
      <Input type="text" placeholder="Pesquisar tarefas" onChange={(e) => setSearch(e.target.value)} />
      {filteredTasks.map((task) => (
        <TaskCard key={task.id}>
          <div aria-hidden="true" onClick={() => setEditing(!isEditing)} onDoubleClick={() => findTask(task.id)}>{task.title}</div>
          <span aria-hidden="true" onClick={() => changeStatus(task.id)}>{task.finished ? ('Tarefa completa') : 'Tarefa em andamento'}</span>
          <HiTrash onClick={() => window.confirm('Tem certeza que quer deletar essa tarefa?') && removeTask(task.id)} />
        </TaskCard>
      ))}
      {/* {data.todos.map((todo: { id: string; title: string; }) => (
        <TaskCard key={todo.id}>
          {todo.title}
        </TaskCard>
      ))} */}
      {/* comentado por não ter sido feita a completa alerteração para graphql */}
    </>
  );
};
