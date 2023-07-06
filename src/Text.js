import React from "react";
import {useState, useEffect} from "react";

export const Text = () => {
    const [text, setText] = useState();

    useEffect(() => {
        console.log("Component mounted");

        return () => {
            console.log("Component unmounted") //for example when you stop requesting from an API
        }
    }, [text]) //will only be triggered when text changes

return (
    <div>
        <input
            onChange={(event) => {
                setText(event.target.value)
            }}/>
        <h1>{text}</h1>
    </div>
    
)
        }