import styled from 'styled-components'
import colors from '../../assets/colors'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.primary};

  @media screen and (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto 35px;
    border-radius: 15px;
  }
`

export const Header = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 15px;
`

export const Content = styled.div`
  min-height: 339px;
  background-color: ${colors.lighter};
  padding: 20px 15px 2px;

  .filters {
    display: block;
    margin-bottom: 22px;

    span {
      display: block;
      color: #aaaaaa;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .buttons-container {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
  }

  @media screen and (min-width: 380px) {
    .filters .buttons-container {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 768px) {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`

export const Label = styled.div`
  display: flex;
  background-color: ${colors.white};
  border-radius: 12px;

  .fa-plus-circle {
    width: 22px;
    font-size: 22px;
    margin: 15px 2px 14px 15px !important;
    color: ${props => (props.focus ? colors.primary : colors.regular)};
  }
`

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  padding: 14px 12px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
`
