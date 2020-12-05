import styled from 'styled-components';

export const TaskCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background: linear-gradient(
    90deg,
    #a55eea 0%,
    #8854d0 100%
  );
  padding: 25px 16px;
  margin: 25px auto;
  border-radius: 5px;
  width: 90%;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(2px);

  }

  div {
    width: 50%;
    overflow-wrap: break-word;
    text-align: left;
  }
`;

export const Input = styled.input`
  padding: 15px;
  width: 80%;
  border-radius: 5px;
  border: none;
  background: rgba(250, 250, 250, 0.9);
  transition: background 0.2s ease;

  &:focus {
      background: #fff;
    }
`;

export const Filter = styled.div`
  margin: 10px auto;

  input {
    color: #fff;
    border: none;
    background: #778ca3;
    padding: 10px;
    margin: 0 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    transition: background 0.2s ease;

    &:hover {
      background: #979ead;
    }
  }
`;
