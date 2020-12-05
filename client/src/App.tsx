import React from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoContainer } from './components/TodoContainer';
import { Apollo } from './services/graphql';
import { TaskListContextProvider } from './hooks/tasks';
import GlobalStyle from './styles/global';
import { TodoList } from './components/TodoList';

const App: React.FC = () => (
  <>
    <TaskListContextProvider>
      <Apollo>
        <TodoContainer>
          <TodoForm />
          <TodoList />
        </TodoContainer>
      </Apollo>
    </TaskListContextProvider>

    <GlobalStyle />
  </>
);

export default App;
