import React from 'react'
export default function SearchState({search,icon}) {
  return (
    <div className='mainclass searchstate'>
        <input placeholder={search}></input>
        <button>{icon}</button>
    </div>
  )
}
