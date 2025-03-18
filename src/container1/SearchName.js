import { useState } from "react"

export default function SearchName({label,icon,fontsize,type}) {
  let [inputvalue,setinputvalue]=useState('');
  const handledelete=()=>{
    setinputvalue('');
  }
  return (
    <div className='mainclass search-name'>
        <input placeholder={label} type={type} onChange={(e)=>setinputvalue(e.target.value)} value={inputvalue} style={{fontSize:fontsize}}></input>
        <button onClick={handledelete}>{icon}</button>
    </div>
  )
}
