import React, { useEffect } from 'react'

// use effect
// hook responsible for side effects (loading after all rendering) like api calling, some kind of dom manipulation
export default function LandingPage() {

    console.log("loads first");

    // has a callback function and dependency array
    useEffect(()=> {

        console.log("I am useEffect : loads in last after rendering of all other components");

    },[])
    // [] :dependency array

    console.log("loads second");

    return (
        <div className='header'>LandingPage</div>
    )
}
