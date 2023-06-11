// 3

import React, { useContext } from 'react'
import User from '../context/Usercontext'
import Description from './Description'

export default function Name() {

    const { user } = useContext(User)

    return (
        <>
            Name.js : {user}<br/>
            <Description/>
        </>
    )
}
