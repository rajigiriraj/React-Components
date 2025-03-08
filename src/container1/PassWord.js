import React from 'react';
import { FaLock } from "react-icons/fa6";

export default function Password() {
  return (
    <div className='mainclass password'>
        <input placeholder='*************' type='password'></input>
        <button><FaLock size={20}color='rgb(102, 103, 103)'/></button>
    </div>
  )
}
