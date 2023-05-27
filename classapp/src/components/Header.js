import React from 'react'

export default function Header({myName,myAge}) {
  return (
    <div>
        <h3>Name : {myName}</h3>
        <h3>Age : {myAge}</h3>
    </div>
  )
}
