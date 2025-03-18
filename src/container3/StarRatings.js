import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";


export default function StarRatings({color,rating,classname}) {
    const [iconclr,seticonclr]=useState(color);
    const clrHandler=(()=>{
        seticonclr(prevclr=>prevclr==='rgb(35, 120, 131)'?'rgb(102, 103, 103)':'rgb(35, 120, 131)')
    })
  return (
    <div>
        <div className={classname}>
            <button onClick={clrHandler} style={{border:'none',backgroundColor:'white',padding:0}}><span><FaStar color={iconclr} size={20}/></span></button>
            <p style={{margin:0, color: 'rgb(102, 103, 103)'}}>{rating}</p>
        </div>       
    </div>
  )
}
