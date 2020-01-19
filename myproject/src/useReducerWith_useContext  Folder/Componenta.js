import React,{useContext} from 'react'
import { counterContext } from '../App'

function Componenta() {
    const counte = useContext(counterContext)
    return (
        <div>
            {/* <div> counter {count}</div> */}Component A-{counte.counter}
            <button onClick={()=> counte.counterDispatch('INCREMENT')} >Increment</button>
            <button onClick={()=> counte.counterDispatch('DECREMENT')}>Decrement</button>
            <button onClick={()=> counte.counterDispatch('RESET')}>Reset</button>
            
        </div>
    )
}

export default Componenta
