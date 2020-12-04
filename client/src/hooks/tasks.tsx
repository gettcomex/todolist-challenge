import React, { createContext, useEffect, useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import api from '../services/api';

interface Task {
  id: string;
  title: string;
  finished: boolean;
}

interface TasksData {
  tasks: Task[];
  addTask(title: string): void;
  removeTask(id: string): void;
  findTask(id: string): void;
  changeStatus(id: string): void;
}

type AddTask = (title: string) => void;
type RemoveTask = (id: string) => void;
type FindTask = (id: string) => void;
type ChangeStatus = (id: string) => void;

export const TaskListContext = createContext<TasksData>({} as TasksData);

export const TaskListContextProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: uuid(), title: 'Lavar a louça', finished: true },
    { id: uuid(), title: 'Tirar o lixo', finished: false },
    { id: uuid(), title: 'Limpar a casa', finished: false },
  ]);

  useEffect(() => {
    async function loadTasks(): Promise<void> {
      try {
        const response = await api.get('/todos');
        setTasks(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    loadTasks();
  }, []);

  const addTask: AddTask = useCallback(async (title: string) => {
    try {
      const response = await api.post('todos/', {
        title,
        finished: false,
      });
      setTasks([...tasks, response.data]);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [tasks]);

  const removeTask: RemoveTask = useCallback(async (id: string) => {
    try {
      await api.delete(`todos/${id}`);
      const newTasks = [...tasks].filter((task) => task.id !== id);
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  }, [tasks]);

  const findTask: FindTask = useCallback(async (id: string) => {
    const foundTask = [...tasks].find((task) => task.id === id);
    const editedTask = foundTask?.title;
    console.log(foundTask, editedTask);
  }, [tasks]);

  const changeStatus: ChangeStatus = useCallback(async (id: string) => {
    const newStatus = [...tasks].map((task) => (task.id === id
      ? { title: task.title, id: task.id, finished: true }
      : { title: task.title, id: task.id, finished: false }));
    setTasks(newStatus);
  }, [tasks]);

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask, findTask, changeStatus }}>
      {children}
    </TaskListContext.Provider>
  );
};
