import React,{useState,useEffect} from 'react'
import RunEffectOnce from './RunEffectOnce'

function MouseContainer() {
    const [display,setDisplay ] = useState(true)
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}> Toggle Display</button>
        {display && <RunEffectOnce /> }            

        </div>
    )
}

export default MouseContainer
