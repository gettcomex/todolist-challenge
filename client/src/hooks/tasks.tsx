import React, { createContext, useState, useCallback } from 'react';

interface Task {
  id: number;
  title: string;
  finished: boolean;
}

interface TasksData {
  tasks: Array<Task>;
  addTask(task: Task): Promise<void>;
}

export const TaskListContext = createContext<TasksData>({} as TasksData);

export const TaskListContextProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 2, title: 'Lavar a louça', finished: true },
    { id: 3, title: 'Tirar o lixo', finished: false },
  ]);

  const addTask = useCallback(async (task) => {
    setTasks([...tasks, task]);
  }, [tasks]);

  return (
    <TaskListContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskListContext.Provider>
  );
};
