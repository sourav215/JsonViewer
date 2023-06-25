import React from 'react'

const InputTab = ({value, handleInputChange}) => {
  return (
    <div className='take-input'>
        <textarea value={value} onChange={handleInputChange} cols="150" rows="20"></textarea>
    </div>
  )
}

export default InputTab