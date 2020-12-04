import React, { createContext, useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

interface Task {
  id: string;
  title: string;
  finished: boolean;
}

interface TasksData {
  tasks: Task[];
  addTask(title: string): void;
  removeTask(id: string): void;
}

type AddTask = (title: string) => void;

type RemoveTask = (id: string) => void;

export const TaskListContext = createContext<TasksData>({} as TasksData);

export const TaskListContextProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: uuid(), title: 'Lavar a louça', finished: true },
    { id: uuid(), title: 'Tirar o lixo', finished: false },
    { id: uuid(), title: 'Limpar a casa', finished: false },
  ]);

  const addTask: AddTask = useCallback(async (title: string) => {
    const newTasks = [...tasks, { id: uuid(), title, finished: false }];
    setTasks(newTasks);
    console.log(newTasks);
  }, [tasks]);

  const removeTask: RemoveTask = useCallback(async (id: string) => {
    const newTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(newTasks);
  }, [tasks]);

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskListContext.Provider>
  );
};
