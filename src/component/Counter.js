import React,{useContext} from 'react'
import {CounterContext} from '../Context/Context'
const Counter = () => {
    const counterState = useContext(CounterContext)
    const {count,setCount} = counterState
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
      
    </div>
  )
}

export default Counter
