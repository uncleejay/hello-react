import React, {useState,useEffect} from "react";


const Message = () => {
    const [message, setMessage] = useState('Loading...')

    // Display a message after page load
    useEffect(() => {
        setTimeout(() => {
            setMessage("Welcome to react")
        }, 2000)
    }, []) // Empty array means this runs once after the component loads

    return <p>{message}</p>
}

export default Message;
