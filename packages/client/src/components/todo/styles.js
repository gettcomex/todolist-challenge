import styled from 'styled-components'
import colors from '../../assets/colors'

export const Todo = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 15px 18px;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    justify-content: space-between;

    .icon-container {
      display: flex;
      align-items: center;

      .fa {
        color: ${props =>
          props.status === 'complete' ? colors.green : colors.yellow};
        margin-top: -1px;
        margin-right: 8px;
      }

      .status {
        color: ${props =>
          props.status === 'complete' ? colors.green : colors.yellow};
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }

    .date {
      font-size: 12px;
      font-weight: 400;
      color: ${colors.regular};
      letter-spacing: 1px;
    }
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }

  ::after {
    content: '';
    height: 100%;
    background: ${props =>
      props.status === 'complete' ? colors.green : colors.yellow};
    width: 20px;
    position: absolute;
    top: 0;
    left: -15px;
  }

  .buttons-container {
    display: flex;
    align-items: center;
    margin-top: 14px;

    .fa {
      font-size: 13px;
      margin-top: 1px;
      margin-right: 6px;
    }

    .in-progress,
    .complete {
      margin-right: 10px;
    }

    .delete {
      background-color: #ffe2e2;
      letter-spacing: 0.4px;
      color: ${colors.red};
    }
  }
`
