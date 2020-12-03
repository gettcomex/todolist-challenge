import React, { useState, FormEvent, useEffect, useContext, useCallback } from 'react';
import { Form } from './styles';
import { TaskListContext } from '../../hooks/tasks';

interface Task {
  title: string;
  finished: boolean;
}

export const TodoForm: React.FC = () => {
  const { addTask } = useContext(TaskListContext);
  const [title, setTitle] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    // if (!title) return;
    console.log(title);
    addTask(title);
    setTitle('');
  }, [title, addTask]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} required placeholder="Exemplo: Contratar Matheus Motta" />
        <button type="button">Adicionar tarefa</button>
      </Form>
    </>
  );
};
