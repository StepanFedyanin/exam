import React from 'react'
import './FilterCategory.scss'
function FilterCategory({ children }) {
  return (
    <button className='castom--btn'>{children}</button>
  )
}

export default FilterCategory