import React, { useContext } from 'react';
import { Button, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
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

/* <Dialog open={open} onEscapeKeyDown={() => setOpen(false)}>
                  <DialogTitle>Tem certeza que quer deletar essa tarefa?</DialogTitle>
                  <DialogActions>
                    <Button variant="contained" color="secondary"
                      onClick={() => removeTask(task.id)}>
                    Sim</Button>
                    <Button variant="contained" onClick={() => setOpen(false)}>Cancelar</Button>
                  </DialogActions>
                </Dialog> */
