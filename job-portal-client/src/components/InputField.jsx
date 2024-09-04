import React from 'react'
import Home from '../Pages/Home'

const InputField = ({handleChange, value, title, name}) => {
  return (
    <label className='sidebar-label-container'>
    <input 
    type='radio'
     name={name}
     value={value} 
     onChange={handleChange}
     />
      <span className='checkmark'></span>{title}
      
  </label>

  
  )
}

export default InputField