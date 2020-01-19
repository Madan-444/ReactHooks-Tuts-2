import React, {useState} from 'react'

function Counter1() {
    const initialState=0
    const [count,setCount] = useState(initialState)
    const increment5=()=> {
        for(let i=0;i<5;i++) {
            setCount((prevState)=> prevState +1)
            console.log(count)
        }
    }

    return (
        <div>
            <div> <h3> {count} </h3> </div>
            <button onClick={()=> setCount((prevState)=> prevState +1)}>Increment </button>
            <button onClick={()=> setCount((prevState)=> prevState -1)}>Decrement </button>
            <button onClick={()=> setCount(initialState)}>Reset </button>
            <button onClick={increment5}>Incraement by 5</button>
        </div>
    )
}

export default Counter1
