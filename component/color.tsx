import React from "react"

const Color = (props) => {
    return <span style={{"color": props.color}}>{props.children}</span>
}


export default Color