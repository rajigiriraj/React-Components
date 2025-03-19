import {React,useState} from 'react';
import { FaCircle } from "react-icons/fa";


export default function Toggle({text,className='',isOn,falsetext}) {
  const [togglecontrol,setToggle]=useState(isOn);
      const handleToggle=()=>{
          setToggle((prev)=>!prev)
      }
  return (
<div className={`toggle-container ${className}`}>     
     <button
      onClick={handleToggle} 
      style={{
        backgroundColor:className=== 'toggleOn-bg'?('rgb(207, 204, 204)'):(togglecontrol?'rgb(35, 120, 131)':'rgb(164, 161, 161)'),
        paddingLeft:togglecontrol?'20px':'5px'}}>
                {togglecontrol?(
                    <>
                       <h3>{text}</h3>
                       <span><FaCircle size={25}/></span>
                    </>
                    ):(
                        <>
                           <span style={{color:'rgb(35, 120, 131)'}}><FaCircle size={25} color='rgb(35, 120, 131)'/></span>
                           <h3 style={{color:'rgb(35, 120, 131)'}}>{falsetext}</h3>
                        </>
                      )}         
            </button>
    </div>
  )
}
