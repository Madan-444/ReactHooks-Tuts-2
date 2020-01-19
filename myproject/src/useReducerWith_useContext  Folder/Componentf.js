import React, { useContext } from 'react'
import { counterContext } from '../App'

function Componentf() {
    const jptValue = useContext(counterContext)
    return (
        <div>
            Component f-{jptValue.counter}
            <button onClick={()=> jptValue.counterDispatch('INCREMENT')} >Increment</button>
            <button onClick={()=> jptValue.counterDispatch('DECREMENT')}>Decrement</button>
            <button onClick={()=> jptValue.counterDispatch('RESET')}>Reset</button>
        </div>
    )
}

export default Componentf
