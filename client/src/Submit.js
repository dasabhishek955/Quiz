import React, { useState } from 'react';
import axios from 'axios';


const Submit = () => {
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [answer, setAnswer] = useState(0);

    const handleClick = async (event) => {
        console.log("hi")
        event.preventDefault();
        await axios.post('http://localhost:5000/submit', {data:[ question, option1, option2, option3, option4, answer ]});
    };

    return (
        <div>
           <center><h1><label for="text" className="col-form-label">Submit Your Questions:-</label></h1></center>
            <div className="row g-6 align-items-center my-3 ">
                <div className="col-auto">
                </div>
                <div className="col-auto my-6">
                    <input type="text" value={question} onChange={e => setQuestion(e.target.value)} required />
                    <input type="text" value={option1} onChange={e => setOption1(e.target.value)} required />
                    <input type="text" value={option2} onChange={e => setOption2(e.target.value)} required />
                    <input type="text" value={option3} onChange={e => setOption3(e.target.value)} required />
                    <input type="text" value={option4} onChange={e => setOption4(e.target.value)} required />
                    <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} required />
                </div>
                <div className="col-auto mx-2">
                    <center><h2><button class="button-15" role="button" onClick={handleClick}>Submit</button></h2></center>
                </div>
            </div>

        </div>
    )
}

export default Submit
