import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate();
    const startClick = () => {
        navigate("/quiz");
    }

    return (
        <div>
            <center><button class="button-85 my-5 mx-5" role="button" onClick={startClick}>Start The Quiz</button></center>
        </div>
    )
}

export default Home
