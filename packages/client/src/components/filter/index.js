import React from 'react'

import { Filter } from './styles'

function filter({ item: { key, label }, filterValue, onPressFilter }) {
  return (
    <Filter
      type="button"
      status={key}
      selected={key === filterValue}
      onClick={() => onPressFilter(key)}
    >
      {label}
    </Filter>
  )
}

export default filter
