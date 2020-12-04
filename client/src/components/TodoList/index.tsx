import React, { useContext } from 'react';
import { TaskListContext } from '../../hooks/tasks';
import { Tasks } from '../Task';
import { Container, ConfirmDelete } from './styles';

export const TodoList: React.FC = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <>
      <Container>
        {tasks.length ? (
          <Tasks />
        ) : <h3>Você não possui nenhuma tarefa!</h3> }
      </Container>
      <ConfirmDelete />
    </>
  );
};
