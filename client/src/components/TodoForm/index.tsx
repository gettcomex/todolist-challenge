import React, { useState, FormEvent, useEffect } from 'react';
import { Form, Error, Tasks } from './styles';
import api from '../../services/api';

interface Task {
  title: string;
  finished: boolean;
}

export const TodoForm: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const [inputError, setInputError] = useState('');
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storagedTasks = localStorage.getItem(
      '@Tasks',
    );

    if (storagedTasks) {
      return JSON.parse(storagedTasks);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Tasks',
      JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      const response = await api.get<Task>(`todos/${newTask}`);
      const task = response.data;
      setTasks([...tasks, task]);
      setNewTask('');
      setInputError('');
    } catch (err) {
      setInputError('Erro ao digitar tarefa');
    }
  };

  return (
    <>
      <Form onSubmit={handleAddTask}>
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Exemplo: Contratar Matheus Motta" />
        <button type="button">Adicionar tarefa</button>
      </Form>
      { inputError && <Error>{inputError}</Error>}

      <Tasks>
        {tasks.map((task) => (
          <div>
            {task.title}
          </div>
        ))}
      </Tasks>
    </>
  );
};
