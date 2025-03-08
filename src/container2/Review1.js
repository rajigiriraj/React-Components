import React from 'react';

export default function Review1({icon,text}) {
  return (
    <div className='review'>
        <label>{icon}</label>
        <p>{text}</p>
    </div>
  )
}