import React from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoContainer } from './components/TodoContainer';
import { TaskListContextProvider } from './hooks/tasks';
import GlobalStyle from './styles/global';
import { TodoList } from './components/TodoList';

const App: React.FC = () => (
  <>
    <TaskListContextProvider>
      <TodoContainer>
        <TodoForm />
        <TodoList />
      </TodoContainer>
    </TaskListContextProvider>

    <GlobalStyle />
  </>
);

export default App;
