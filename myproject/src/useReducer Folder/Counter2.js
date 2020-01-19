import React,{useReducer} from 'react'

const initialState = {
    firstCount:0,
    secondCount:10
}

function Counter2() {
    const reducer = (state,action)=> {
        switch(action.type){
            case 'INCREMENT':
                return {...state,firstCount:state.firstCount+action.value}
            case 'DECREMENT':
                return {...state,firstCount:state.firstCount -action.value}
            case 'INCREMENT2':
                return {...state,secondCount:state.secondCount+action.value}
            case 'DECREMENT2':
                return {...state,secondCount:state.secondCount -action.value}
            case 'RESET':
                return initialState
            default:
                return state
        }
    }
    
    const [count,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <div> counter {count.firstCount}</div>
            <div> counter {count.secondCount}</div>
            <button onClick={()=> dispatch({type:'INCREMENT',value:1})} >Increment</button>
            <button onClick={()=> dispatch({type:'DECREMENT',value:1})}>Decrement</button>
            <button onClick={()=> dispatch({type:'INCREMENT',value:5})} >Increment 5</button>
            <button onClick={()=> dispatch({type:'DECREMENT',value:5})}>Decrement 5</button>
            <div>
            <button onClick={()=> dispatch({type:'INCREMENT2',value:1})} >Increment</button>
            <button onClick={()=> dispatch({type:'DECREMENT2',value:1})}>Decrement</button>
            <button onClick={()=> dispatch({type:'INCREMENT2',value:5})} >Increment 5</button>
            <button onClick={()=> dispatch({type:'DECREMENT2',value:5})}>Decrement 5</button>
            </div>
            
            <button onClick={()=> dispatch({type:'RESET'})}>Reset</button>
        </div>
    )
}

export default Counter2
