import React from 'react'

export default function Footer(props) {
  // props come as objects, containing attributes from parent file as key value pairs
  return (
    <div>
        <h6>Copyright {props.mycopyright}</h6>
    </div>
  )
}
