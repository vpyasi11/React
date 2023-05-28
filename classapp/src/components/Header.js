import React from 'react'

export default function Header({name,setName}) {

  function handleClick(){
    setName("welcome")
  }
  return (
    <div>
        <h3>Name : {name}</h3>
        {/* <h3>Age : {Age}</h3> */}
        <button onClick={handleClick}>Change</button>
    </div>
  )
}
