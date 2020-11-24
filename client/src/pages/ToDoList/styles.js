import styled, { css } from 'styled-components'

export const Container = styled.div`
    height: 100%;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const ListWrapper = styled.div`
  background-color: #fff;
  padding: 12px;
  border-radius: 8px;
  width: 50%;
  p{
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 18px;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 4px;
    border-radius: 8px;
    border:1px solid #cccccc;
  }
`
export const ListItems = styled.div`
  .listItemsOptions{
    display: flex;
    button{
      margin-right: 8px;
      margin-top: 12px;
      border: 0;
      background: none;
      color: #7159c1;
    }
  }
`

export const ListItem = styled.div`
margin-top: 8px;
display: flex;

.completeTaskCheckbox {
  width: 20px;
  margin-right: 8px;
}

  button{
        margin-left: 8px;
        border: 0;
        background: none;
        color: red;
        font-size: 20px;
  }

`
