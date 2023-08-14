import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';
import Submit from './Submit';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/result" element={<Result />} />
          <Route exact path="/submit" element={<Submit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
