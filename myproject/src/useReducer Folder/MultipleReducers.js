import React,{useReducer} from 'react'

const initialState = 0

function MultipleReducers() {
    const reducer = (state,action)=> {
        switch(action){
            case 'INCREMENT':
                return state+1
            case 'DECREMENT':
                return state -1
            case 'RESET':
                return initialState
            default:
                return state
        }
    }
    const [count,dispatch] = useReducer(reducer,initialState)
    const [count2,dispatch2] = useReducer(reducer,initialState)

    return (
        <div>
            <div>
            <div> counter {count}</div>
            <button onClick={()=> dispatch('INCREMENT')} >Increment</button>
            <button onClick={()=> dispatch('DECREMENT')}>Decrement</button>
            <button onClick={()=> dispatch('RESET')}>Reset</button>
            </div>
            <div>
            <div> counter {count2}</div>
            <button onClick={()=> dispatch2('INCREMENT')} >Increment</button>
            <button onClick={()=> dispatch2('DECREMENT')}>Decrement</button>
            <button onClick={()=> dispatch2('RESET')}>Reset</button>

            </div>
        </div>
    )
}

export default MultipleReducers
