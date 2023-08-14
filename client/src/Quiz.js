import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Quiz = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([])
  const [index, setindex] = useState(0)
  const [marks, setmarks] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:5000/questions')
      .then(response => {
        setData(response.data);
      });
  }, []);

  const onNext = event => {
    if (index < data.length - 1) {
      if (data[index][1] === event.currentTarget.id) {
        setmarks(marks + 1)
      }
      setindex(index + 1);
    }
    else {
      let temp = marks
      if (data[index][1] === event.currentTarget.id) {
        temp++;
      }
      navigate('/result', {state: { score: temp, fullmarks: data.length } })
    }
  }
  if (data.length === 0) {
    return <h1>Loading...</h1>
  }

  console.log(data.length);
  return (
    <>
      <div className="row g-6 align-items-center mx-8 ">
        <center><h1>{data[index][0]}</h1></center>
        <div>
          {data[index][2].map((option) =>
            <button class="button-85 my-5 mx-5" id={option} onClick={onNext}>{option}</button>
          )}
        </div>
      </div>
    </>
  )
}
export default Quiz

