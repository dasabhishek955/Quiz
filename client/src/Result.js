import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


function Result() {
    const { state } = useLocation();
    const { score } = state;
    const { fullmarks } = state;
    // console.log(full, score);
    let navigate = useNavigate();
    // if (score !== null) {
    //     return <h1>Your score: {score}</h1>
    // }
    const onClick = () => {
        navigate("/quiz");
    }
    return (
        <div className="row g-6 align-items-center my-3 ">
            <center><h1>Your score is: {score}</h1></center>
            <center><h1>Full Marks is: {fullmarks}</h1></center>
            <center><button class="button-85 my-5 mx-5" role="button" onClick={onClick}>Start Again</button></center>
        </div>
    )
}

export default Result
