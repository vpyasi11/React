import React from 'react'
import { useCookies } from 'react-cookie'

// npm i react-cookie
/* Diff b/w cookies and localstorage

    --> cookies can store(around 4kb) and localstorage (5mb)
    --> cookies expiry can be set
*/

export default function RCookies() {

    const [cookie, setCookies] = useCookies('')

    function handleChange(e){
        console.log(e.target.value);
        setCookies('name', e.target.value, {path:'/'})
    }
    
    return (
        <div>
            <h1>NAME {cookie.name}</h1>
            <input type='text' placeholder='enter your name' onChange={handleChange}/>
        </div>
    )
}



