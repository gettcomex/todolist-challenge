import React from 'react'

import { Filter } from './styles'

function filter({ item: { key, label }, selected, onPressFilter }) {
  return (
    <Filter
      type="button"
      status={key}
      selected={selected}
      onClick={() => !selected && onPressFilter(key)}
    >
      {label}
    </Filter>
  )
}

export default filter
