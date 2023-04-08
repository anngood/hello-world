import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProblemList from './ProblemList';
import Problem from './Problem';
import HomePage from './HomePage';

function App(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="ProblemList" element={<ProblemList/>} />
            <Route path="Problem" element={<Problem />} />
          </Routes>
        </BrowserRouter>
      );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App></App>
)