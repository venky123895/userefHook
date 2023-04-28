import React from 'react'
import './timer.css'
import { useState } from 'react'
import { useRef } from 'react'
const Timer = () => {
const [state,setState]=useState(0)
let ref=useRef(null)
const increament=()=>{
     ref.current=setInterval(()=>{
        setState((prevState)=> prevState +1)
    },1000)
}

const hold=()=>{
    clearInterval(ref.current)
}


  return (
    <div className='timer'>
        <h1>Current Time : <span>{state}</span></h1>
        <div className="but">
            <button className='start' onClick={increament}>Start</button>
            <button className='start' onClick={hold}>Stop</button>
        </div>
    </div>
  )
}

export default Timer