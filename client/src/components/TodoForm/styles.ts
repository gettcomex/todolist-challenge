import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 18px;
  margin-top: 20px;
  display: flex;
  width: 90%;
  height: 70px;

  input {
    padding: 22px 22px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid  #546de5;
    outline: none;
    width: 80%;
    background: rgba(250, 250, 250, 0.9);
    transition: background 0.2s ease;

    &:focus {
      background: #fff;
    }
  }

  button {
    color: #fff;
    font-size: 17px;
    padding: 10px 16px;
    text-transform: capitalize;
    border: none;
    border-radius: 0 4px 4px 0;
    background: #546de5;
    transition: all 0.2s ease;

    &:hover {
      background: #425de2;
    }
  }
`;
