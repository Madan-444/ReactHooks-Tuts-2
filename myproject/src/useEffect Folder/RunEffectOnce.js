import React, {useState,useEffect} from 'react'

function RunEffectOnce() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition=(e)=> {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=> {
        console.log('useeffect called')
        window.addEventListener('mousemove',logMousePosition)
        return ()=> {
            console.log('event removed')
            window.removeEventListener('mousemove',logMousePosition)
        }
            
        
    },[])
    return (
        <div>
            <h3>x-{x} and y- {y} </h3>
        </div>
    )
}

export default RunEffectOnce
