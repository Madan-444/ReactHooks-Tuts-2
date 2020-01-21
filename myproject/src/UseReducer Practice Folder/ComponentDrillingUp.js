import React from 'react'

function ComponentDrillingUp(props) {
    const handleClick=()=> {
        props.handledrill()

    }
    return (
        <div>
            <button onClick={handleClick}>Click button</button>
        </div>
    )
}

export default ComponentDrillingUp
