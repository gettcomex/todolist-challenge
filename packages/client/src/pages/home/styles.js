import styled from 'styled-components'
import colors from '../../assets/colors'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.primary};
  border-radius: 15px;
`

export const Header = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 15px;
`

export const Content = styled.div`
  background-color: ${colors.lighter};
  border-radius: 15px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
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
