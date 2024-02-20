import '../App.css';
import { useState } from "react";

export const ReactHooks = () =>{
    const [age, setAge] = useState(0);
    const [text, setText] = useState("");
    const [visibleState, setVisibleState] = useState(false);
    const [txtColor, setTxtColor] = useState("");
    
    

    const increaseAge = () => {
        setAge(age+1);
    }
    const decreaseAge = () => {
        if(age >0)
            setAge(age-1);
    }
    const resetAge = () => {
        setAge(0);
    }

    // toggle visiblity
    // const visiblity = () =>{
    //     setVisibleState(!visibleState); 

    // }

    const handleInput = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            {age} <br/>
            <button onClick={increaseAge}>Increase age</button>
            <button onClick={decreaseAge}>decrease age</button>
            <button onClick={resetAge}>reset</button>
            <p>
                <input type="text" onChange={handleInput} />
                <h1>{text}</h1>
            </p>
            {/* <button onClick={() =>{ setVisibleState(!visibleState); }}>Show/Hide</button> */}
            <button onClick={() =>{ setTxtColor(txtColor === "green" ? "black" : "green"); }}>Show/Hide</button>
            {/* {visibleState === true && <h1>Hi I am Luxshan</h1> } */}
            <h1 style={{color: txtColor}}>Hi I am Luxshan</h1>
        </div>
    )
}