import React, { useState } from 'react';
import { Container } from './styles';

export const TodoContainer: React.FC = ({ children }) => {
  const [input, setInput] = useState('');

  return (
    <Container>
      { children}
    </Container>
  );
};
