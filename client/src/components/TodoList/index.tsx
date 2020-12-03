import React, { useContext } from 'react';
import { HiTrash } from 'react-icons/hi';
import { TaskListContext } from '../../hooks/tasks';
import { TaskCard, Container } from './styles';

export const TodoList: React.FC = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <Container>
      {tasks.map((task) => (
        <>
          <TaskCard key={task.id}>
            <div>{task.title}</div>
            <span>{task.finished ? 'Tarefa completa' : 'Tarefa em andamento'}</span>
            <HiTrash />
          </TaskCard>
        </>
      ))}
    </Container>
  );
};
