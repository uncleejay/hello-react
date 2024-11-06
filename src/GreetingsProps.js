import React from "react";


//props allows you to send date from one component to another
const Greetings = (props) => {
    return <div>Hello {props.name}</div>
}

export default Greetings