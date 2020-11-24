import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ToDoList from '../pages/ToDoList'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ToDoList} />
    </Switch>
  )
}
