import React from 'react'

export default function Newwindow({text,cls}) {
  return (
    <button onClick={() => window.open("http://www.google.com")} className={`window ${cls}`}>
        <h3>{text}</h3>
    </button>
  )
}
