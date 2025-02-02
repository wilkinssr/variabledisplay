import './App.css';
import React from 'react';


function App () {

let stringVar = "Welcome to React";
let numberVar = 41;
let booleanVar = false;
let arrayVar = ["React", "JSX", "Variables"];

 if (Math.random() > 0.5) {
  stringVar = "Welcome to Advanced React";
 }
  
 return (
  <div>
    <h1>{stringVar}</h1>
    <h1>{arrayVar}</h1>
    <h1>{numberVar}</h1>
    <h1>{booleanVar}</h1>
 
  </div>
 );
}



export default App;