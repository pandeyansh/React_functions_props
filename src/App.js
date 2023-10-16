import React, {useState} from 'react';
import './App.css';
import Greetings from './components/Greetings';
import Products from './components/Products';
import ToDoList from './components/ToDoList';
import Weather from './components/Weather';
const App = () => {
    const [curValue, newValue] = useState(0);
    const key = ["Gurugram", "Noida", "Delhi", "Jaipur", "Banglore"];
    const value = ["31°C", "30°C", "31°C", "29°C", "23°C"];
    const mapData = new Map();
    for(let i = 0; i < key.length; i++) {
      mapData.set(key[i], value[i]);
    }
  return (
    <div>
        <Greetings name="Ansh Pandey"></Greetings>
        <h1>Value is {curValue}</h1>
        <button className = "button1" onClick = {() => newValue(curValue-1)}>-</button>
        <button className = "button2" onClick = {() => newValue(curValue+1)}>+</button>
        <button onClick = {() => newValue(0)}>reset</button>
        <Products name = "iPad Pro Max" price = {120000} quantity = {1}></Products>
        <ToDoList todos = {[["Walk", "Walk Early in the morning"], ["Ex", "Exercise"], ["TB", "Take Bath"], ["OT", "Office Time"]]}></ToDoList>
        <Weather arr = {mapData} cities = {key}></Weather>
    </div>
  )
}
export default App