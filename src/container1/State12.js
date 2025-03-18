import React, { useState } from 'react';
import { FaCircle } from "react-icons/fa";
// import { FaRegCircleDot } from "react-icons/fa6";

export default function State12({state,color}) {
  const [iconclr,seticonclr]=useState(color);
  const clrHandler=()=>{
    seticonclr(prevclr=>prevclr==='rgb(69, 153, 164)'?'rgb(102, 103, 103)':'rgb(69, 153, 164)')
  }
  return (
    <div className='mainclass stateclass' style={{color:iconclr}}>
        <label>{state}</label>
        <button onClick={clrHandler}>
          <FaCircle 
          size={25} 
          style={{
            color:iconclr}}/>
        </button>
    </div>
  )
}
