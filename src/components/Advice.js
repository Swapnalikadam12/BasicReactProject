import {React, useEffect, useState } from "react";
import axios from 'axios';

export default function Advice() {
    const [advice, setAdvice] = useState('');

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                setAdvice(response.data.slip.advice);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchAdvice();
         //eslint-disable-next-line
    }, [])

    return (
        <div className="app">
            <div className="card">
                 <h2 className="heading">{advice}</h2>
                 <button className="button" onClick = {fetchAdvice}>
                     <span>Give Me Advice</span>
                 </button>
            </div>
        </div>
    );

}

