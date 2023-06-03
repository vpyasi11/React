import React, { useEffect, useState } from 'react'

// use effect
// hook responsible for side effects (loading after all rendering) like api calling, some kind of dom manipulation
export default function LandingPage() {

    const [counter, setCounter] = useState(0)

    console.log("loads first");
    // console.log(document.querySelector(".header")) --> wont work as header not yet loaded

    // has a callback function and dependency array
    useEffect(()=> {

        console.log("I am useEffect : loads in last after rendering all the content of this component");
        console.log(document.querySelector(".header"))

    },[counter])
    // [] :dependency array
        // case 1: dependency array is empty --> useffect runs only singlr time when the page renders
        // case 2: dependency array has some state or props --> whenever the state or props change, useffect will be trigerred that many times 

    console.log("loads second");

    return (
        <div className='header'>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            {counter}
        </div>
    )
}
