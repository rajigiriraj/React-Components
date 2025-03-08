import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";


export default function Menu() {
  return (
    <div className='menu'>
        <button><IoMdMenu color='white'size={25}/></button>
        <label>WELCOME MENU</label>
        <button><IoMdSettings color='white' size={25}/>
        </button>
    </div>
  )
}
