import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";



function App(props) {
  return (
    <div>
      <a href={props.link}>{props.name}</a>
    </div>
  );
}

export default App;