import { useState } from "react";

export function useFromInput(initialValue){
    const [value,setValue]=useState(initialValue)
    // const [value,setValue]=useState
    // const [value,setValue]=useState

    function handleChange(e){
        setValue(e.target.value)
    }
    return{
        value,
        onChange:handleChange
    }
}