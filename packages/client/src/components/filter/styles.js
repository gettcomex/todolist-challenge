import styled from 'styled-components'
import colors from '../../assets/colors'

export const Filter = styled.div`
  display: inline-block;
  background-color: ${props => (props.selected ? colors.primary : '#eae9ff')};
  border: none;
  border-radius: 6px;
  padding: 6px 10px 6px 8px;
  margin-right: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  color: ${props => (props.selected ? colors.white : colors.primary)};
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  :hover {
    opacity: 0.85;
    font-weight: 600;
    -webkit-text-stroke: ${props =>
      props.selected ? `0.25px ${colors.white}` : 'none'};
  }

  @media screen and (min-width: 380px) {
    margin-bottom: 0;
  }
`
