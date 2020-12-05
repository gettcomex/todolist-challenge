import styled from 'styled-components';

export const TaskCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );
  padding: 25px 16px;
  margin: 25px auto;
  border-radius: 5px;
  width: 90%;

  div {
    width: 50%;
    overflow-wrap: break-word;
    text-align: left;
  }
`;
