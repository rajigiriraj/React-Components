import React from 'react';
import { FaCircle } from "react-icons/fa";


export default function Toggle({text,className=''}) {
  return (
<div className={`toggle-container ${className}`}>     
     <button>
            <h3>{text}</h3>
            <span><FaCircle size={25}/></span>
        </button>
    </div>
  )
}
