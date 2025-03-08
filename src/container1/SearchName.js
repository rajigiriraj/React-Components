import React from 'react';
import { RxSize } from 'react-icons/rx';
export default function SearchName({label,icon}) {
  return (
    <div className='mainclass search-name'>
        <input placeholder={label}></input>
        <button>{icon}</button>
    </div>
  )
}
