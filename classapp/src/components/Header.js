import React from 'react'
import Title from './subcomponent/Title'

export default function Header({ name, setName , showTitlePage, setTitlePage}) {

  function handleClick() {
    setName("welcome")
    setTitlePage(false)
  }
  return (
    <>
      <div>
        <h3>Name : {name}</h3>
        {/* <h3>Age : {Age}</h3> */}
        <button onClick={handleClick}>Change</button>
      </div>
      <div>
        {/* conditional rendering of component */}
        This is title page : {showTitlePage ? <Title/> : null}
      </div>
    </>
  )
}
