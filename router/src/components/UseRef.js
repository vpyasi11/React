import React, { useRef, useState } from 'react'

// useref prevents re-rendering
// onchange re-renders component on every change

export default function UseRef() {

    const inputref = useRef(null)
    const [name, setName] = useState('')

    console.log("this component is rendering");

    function handleClick() {
        console.log(inputref.current.value, 'from useref')
        console.log(name, "onchange");
    }

    function handleChange(e) {
        setName(e.target.value)
    }

    return (
        <div>
            <input type='text' placeholder='input text' ref={inputref} /><br />
            <input type='text' placeholder='using onchange' onChange={handleChange} />
            <button onClick={handleClick}>Show</button>
        </div>
    )
}
