import Axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css';



export const UsingAPI = () =>{
    const [fact, setFact] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const fetchData = () =>{
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setAge(res.data);
        });
    };
    
    // var catData;

    useEffect(() => {
        handleChange();
    }, []); 
    

    const handleChange = () =>{
        Axios.get("https://catfact.ninja/fact").then((res) => {
            // console.log(res.data);
            setFact(res.data);
            // catData = res.data;
        });
       
    };

    return (
        <div>
            <button onClick={handleChange}>Generate Cat Fact</button>
            <h1>{fact.fact}</h1>

            <input type="text" onChange={(event) => setName(event.target.value)} />
            <button onClick={fetchData}>Predict Age</button>
            <h1>Predicted Age:{age.age} </h1>
        </div>
    );

};