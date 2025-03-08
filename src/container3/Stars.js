import React from 'react';
import { FaStar } from "react-icons/fa";

export default function Stars() {
  return (
    <div className='stars'>
        <div className='star-left'>
            <span><FaStar  color='rgb(35, 120, 131)' size={20}/></span>
            <p>3.6</p>
        </div>
        <div className='stars-right'>
            <span><FaStar color='rgb(102, 103, 103)' size={20}/></span>
            <span><FaStar  color='rgb(102, 103, 103)' size={20}/></span>
            <span><FaStar  color='rgb(102, 103, 103)' size={20}/></span>
            <span><FaStar  color='rgb(102, 103, 103)' size={20}/></span>
            <span><FaStar  color='rgb(102, 103, 103)' size={20}/></span>
        </div>
    </div>
  )
}
