import React from 'react';
import { FaCircle } from "react-icons/fa";

export default function ToggleOff({text,className=''}) {
  return (
<div className={`toggle ${className}`}>       
     <button>
            <span><FaCircle size={25}/></span>
            <h3>{text}</h3>
        </button>
    </div>
  )
}
