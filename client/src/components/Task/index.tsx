import React, { useContext, useState, useEffect } from 'react';
import { HiTrash } from 'react-icons/hi';
import { TaskListContext } from '../../hooks/tasks';
import { TaskCard } from './styles';

export const Tasks: React.FC = () => {
  const { tasks, removeTask, findTask, changeStatus } = useContext(TaskListContext);
  const [isEditing, setEditing] = useState(false);


  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id}>
          <div aria-hidden="true" onClick={() => setEditing(true)} onDoubleClick={() => findTask(task.id)}>{task.title}</div>
          <span aria-hidden="true" onClick={() => changeStatus(task.id)}>{task.finished ? ('Tarefa completa') : 'Tarefa em andamento'}</span>
          <HiTrash onClick={() => { removeTask(task.id); }} />
        </TaskCard>
      ))}
    </>
  );
};
