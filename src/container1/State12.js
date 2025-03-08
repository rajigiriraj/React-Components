import React from 'react';
import { FaCircle } from "react-icons/fa";
// import { FaRegCircleDot } from "react-icons/fa6";

export default function State12({state}) {
  return (
    <div className='mainclass stateclass' style={{color:state==='ALASKA'?'rgb(69, 153, 164)':'black'}}>
        <label>{state}</label>
        <button><FaCircle size={25} style={{color:state==='ALASKA'?'rgb(69, 153, 164)':'rgb(102, 103, 103)'}}/></button>
    </div>
  )
}
