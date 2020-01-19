import React,{ useContext } from 'react'
import { counterContext } from '../App'

function Componentd() {
    const obtained = useContext(counterContext)
    return (
        <div>
             Component d-{obtained.counter}
            <button onClick={()=> obtained.counterDispatch('INCREMENT')} >Increment</button>
            <button onClick={()=> obtained.counterDispatch('DECREMENT')}>Decrement</button>
            <button onClick={()=> obtained.counterDispatch('RESET')}>Reset</button>
        </div>
    )
}

export default Componentd
