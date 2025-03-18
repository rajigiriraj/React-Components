import React from 'react'

export default function Range({cls,value}) {
  return (
    <div className={`range${cls}`}>
        <input type='range'></input>
    </div>
  )
}
