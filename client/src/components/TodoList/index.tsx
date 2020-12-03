import React, { useContext } from 'react';
import { TaskListContext } from '../../hooks/tasks';
import { Task } from '../Task';

export const TodoList: React.FC = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} />
      ))}
    </div>
  );
};
