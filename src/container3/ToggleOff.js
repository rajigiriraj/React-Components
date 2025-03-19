import {React,useState} from 'react';
import { FaCircle } from "react-icons/fa";

export default function ToggleOff({text,className='',isOff,ontext}){
  const [changeToggle,setToggle]=useState(isOff);
  const handleToggle=()=>{
    setToggle((prev)=>!prev)
  }
  return (
    <div className={`toggle ${className}`}>       
        <button 
          onClick={handleToggle} style={{
            backgroundColor:className==='toggleOff-bg'?(changeToggle?'rgb(207, 204, 204)':'rgb(35, 120, 131)'):(changeToggle?'white':'rgb(35, 120, 131)'),
                paddingRight:changeToggle?'20px':'5px'}
      }>
          {changeToggle?(
            <>
              <span><FaCircle size={25}/></span>
              <h3>{text}</h3>
            </>
          ):
          (
            <>
               <h3 style={{color:'white'}}>{ontext}</h3>
               <span style={{color:'white'}}><FaCircle size={25}/></span>
            </>
          )}
            
        </button>
    </div>
  )
}
