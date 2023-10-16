import React from 'react'
const Weather = (props) => {
  const i = 4;
  return (
    <div>
        <h4>City name is {props.cities[i]} and Weather temperature is {props.arr.get(props.cities[i])}.</h4>
    </div>
  )
}
export default Weather