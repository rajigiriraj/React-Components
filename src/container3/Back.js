import React from 'react';

export default function Back({text,cls,icon}) {
  return (
    <div className={`back ${cls}`}>
        <button>{icon}</button>
        <h3>{text}</h3>
    </div>
  )
}
