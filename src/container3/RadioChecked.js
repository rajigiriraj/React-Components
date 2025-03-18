import React, { useState } from 'react';
import { CgRadioChecked } from "react-icons/cg";
import { IoMdRadioButtonOff } from "react-icons/io";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";



export default function RadioChecked({text,ischeckedRounded,icon,rounded,isCheckedSquare,squared}) {
  let [iconRadio,seticonRadio]=useState(ischeckedRounded)
  const handleRounded=()=>{
    seticonRadio((previcon)=>!previcon)
  }

  let [iconSquared,setSquare]=useState(isCheckedSquare)
  const handelSquare=()=>{
    setSquare((previcon)=>!previcon)
  }

  return (
    <div className='radio-check'>
        <button onClick={handleRounded}>
          {!rounded&&(icon)}
          {rounded&&(
          iconRadio?(<CgRadioChecked color='rgb(35, 120, 131)'  size={25} />)
          :(<IoMdRadioButtonOff color='rgb(35, 120, 131)' size={25}/>)
          )}
        </button>
        {squared&&( <button onClick={handelSquare}>
          {!squared&&(icon)}
          {squared&&(
            iconSquared?<FaRegCheckSquare color='rgb(35, 120, 131)' size={20}/>:<MdOutlineCheckBoxOutlineBlank color='rgb(35, 120, 131)' size={20}/>
          )}
        </button>)}
       
          
        

        <h3>{text}</h3>
    </div>
  )
}
