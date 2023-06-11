import React, {useContext} from 'react'
import User from '../context/Usercontext'

export default function Description() {

    const {user, setUser, age, setAge} = useContext(User)

    return (
        <>
            description.js : {user} | {age}
            <br/>
            <button onClick={()=>setUser('chandramani')}>Change name</button>
            <button onClick={()=>setAge(21)}>Change age</button>
        </>
    )
}
