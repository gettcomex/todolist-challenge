import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;

  h3 {
    margin: 0 auto;
    font-weight: 400;
    font-size: 22px;
    color: #ddd;
  }
`;

export const ConfirmDelete = styled.div`
  display: flex;
  visibility: hidden;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 35%;
  width: 400px;
  height: 200px;
  background-color: #aaa;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;
