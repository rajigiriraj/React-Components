import React from 'react'

export default function RadioChecked({text,icon}) {
  return (
    <div className='radio-check'>
        <button>{icon}</button>
        <h3>{text}</h3>
    </div>
  )
}
