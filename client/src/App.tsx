import React from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoContainer } from './components/TodoContainer';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>

    <TodoContainer>
      <TodoForm />
    </TodoContainer>
    <GlobalStyle />
  </>
);

export default App;
