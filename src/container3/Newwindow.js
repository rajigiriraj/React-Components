import React from 'react'

export default function Newwindow({text,cls}) {
  return (
    <div className={`window ${cls}`}>
        <h3>{text}</h3>
    </div>
  )
}
