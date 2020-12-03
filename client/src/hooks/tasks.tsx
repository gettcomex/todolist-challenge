import React, { createContext, useState, useCallback } from 'react';
import uuid from 'uuid';

interface Task {
  id: number;
  title: string;
  finished: boolean;
}

interface TasksData {
  tasks: Task[];
  addTask(title: string): void;
}

type AddTask = (title: string) => void;

export const TaskListContext = createContext<TasksData>({} as TasksData);

export const TaskListContextProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 2, title: 'Lavar a louça', finished: true },
    { id: 3, title: 'Tirar o lixo', finished: false },
    { id: 4, title: 'ATirar o lixo', finished: false },
  ]);

  const addTask: AddTask = useCallback(async (title: string) => {
    const newTasks = [...tasks, { id: Math.random(), title, finished: false }];
    setTasks(newTasks);
    console.log(newTasks);
  }, [tasks]);

  return (
    <TaskListContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskListContext.Provider>
  );
};
