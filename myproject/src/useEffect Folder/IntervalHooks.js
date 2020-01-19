import React,{ useState,useEffect } from 'react'

function IntervalHooks() {
    const [count,setCount] = useState(0)
    
    useEffect(()=> {
        const tick=()=> {
            setCount(count+1)
        }
        let interval = setInterval(tick,1000)
        return ()=> {
            clearInterval(interval)
        }
    },[count])
    return (
        <div>
            <h3>{count} </h3>
        </div>
    )
}

export default IntervalHooks
