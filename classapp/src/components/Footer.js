import React from 'react'

export default function Footer(props) {
  // props come as objects, containing attributes from parent file as key value pairs
  return (
    <div>
        <h4>Copyright {props.name}</h4>
    </div>
  )
}
