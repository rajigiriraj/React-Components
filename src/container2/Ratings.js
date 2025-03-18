import React, { useState } from 'react';


export default function Ratings({icon,text,classname,bgclr}) {
    const [bg,setbg]=useState(bgclr);
    const clrHandler=()=>{
      setbg(prevclr=>prevclr==='rgb(69, 153, 164)'?'white':'rgb(69, 153, 164)')
    }
  return (
    <button onClick={clrHandler} style={{backgroundColor:'white',padding:0, border:'none'}}>
    <div className={`review ${classname}`} style={{backgroundColor:bg}}>
        <label>{icon}</label>
        <p>{text}</p>
    </div>
    </button>
  )
}
