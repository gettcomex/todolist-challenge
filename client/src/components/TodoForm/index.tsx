import React, { useState, FormEvent, useContext, useCallback } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Form } from './styles';
import { TaskListContext } from '../../hooks/tasks';

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      title
    }
  }
`;

export const TodoForm: React.FC = () => {
  const { addTask } = useContext(TaskListContext);
  const [title, setTitle] = useState('');
  const [addTodo, { data }] = useMutation(ADD_TODO);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (!title || /^\s*$/.test(title)) return;
    addTask(title);
    setTitle('');
  }, [title, addTask]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} required placeholder="Exemplo: Contratar Matheus Motta" />
        <button type="submit">Adicionar tarefa</button>
      </Form>
    </>
  );
};
