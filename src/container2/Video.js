import React from 'react';
import { FaPlay } from "react-icons/fa";
import componentImg from '../component.png';

export default function Video() {
  return (
    <div className='video'>
        <img src={componentImg} width={430} height={200}></img>
        <div className='play'>
            <button><FaPlay /></button>
            <input type='range' value={0}></input>
        </div>
        
    </div>
  )
}
