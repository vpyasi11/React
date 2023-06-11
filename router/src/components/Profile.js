// 2. defining a boundary
import {useMemo, useState} from 'react'
import User from '../context/Usercontext'
import Name from './Name'

export default function Profile(){
    const [user, setUser] = useState('vishu')
    const [age, setAge] = useState(27)

    // increasing performance as act as cache memory
    const value = useMemo(
        ()=> ({ user, setUser, age, setAge})
    )

    return(
        <>
            <User.Provider value={value}>
                Profile.js: {user} | {age} <br/>
                <Name></Name>
            </User.Provider>
        </>
    )
}