import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FcBusinesswoman } from "react-icons/fc";

export default function Contact() {
  return (
    <div className='contact'>
        <span><FcBusinesswoman size={50} /></span>
        <div className='details'>
            <h3>Angelo</h3>
            <p>Web designer</p>
        </div>
        <button><FaPhoneAlt color='rgb(102, 103, 103)'/></button>
    </div>
  )
}
