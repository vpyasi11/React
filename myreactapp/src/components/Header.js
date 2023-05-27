import React from "react";
import './Header.css'

export default function Header(props){
    return(
        <div>
            {/* <h1 className="heading">My name is {myName}</h1> */}
            <h1 className="heading">My name is {props.myName}</h1>
            {/* inline CSS in react */}
            <p style = {{color:"red"}}>Contact us</p>
        </div>
    )
}
