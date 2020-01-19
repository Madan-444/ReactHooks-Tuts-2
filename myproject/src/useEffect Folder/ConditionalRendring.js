import React,{useState,useEffect} from 'react'

function ConditionalRendring() {
    let initialState=0
    const [count,setCount] = useState(initialState)
    const [name,setname] = useState('')

    useEffect(()=> {
        document.title = `you clicked ${count} times`
        
        console.log('useeffect function calls every render in the dom')
    },[count])
    return (
        
        <div>
            <input value={name} onChange={(e)=> setname(e.target.value)} />
            <button onClick={()=> setCount((prevState=> prevState + 1))}>Increment</button>
            
        </div>
    )
}

export default ConditionalRendring

