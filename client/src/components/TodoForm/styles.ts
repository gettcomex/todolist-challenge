import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 32px;
  margin-top: 20px;
  display: flex;
  width: 90%;
  height: 70px;

  input {
    padding: 22px 22px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #ffc054;
    outline: none;
    width: 80%;
    background: rgba(250, 250, 250, 0.9);
    transition: background 0.2s ease;

    &:focus {
      background: rgba(254, 254, 254, 0.95);
    }
  }

  button {
    color: #fff;
    font-size: 17px;
    padding: 10px 16px;
    text-transform: capitalize;
    border: none;
    border-radius: 0 4px 4px 0;
    background: linear-gradient(90deg, #e85156 0%, #e2424f 100%);
  }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;`;
