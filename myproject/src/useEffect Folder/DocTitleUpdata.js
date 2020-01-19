import React,{useState,useEffect} from 'react'

function DocTitleUpdata() {
    let initialState=0
    const [count,setCount] = useState(initialState)

    useEffect(()=> {
        document.title = `you clicked ${count} times`
        console.log('useeffect function calls every render in the dom')
    },[count])
    return (
        
        <div>
            <button onClick={()=> setCount((prevState=> prevState + 1))}>Increment</button>
            <button onClick={()=> setCount((prevState=> prevState - 1))}>Decrement</button>
            {console.log('render')}
        </div>
    )
}

export default DocTitleUpdata

