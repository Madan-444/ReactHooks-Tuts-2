import React from 'react'
import ComponentDrillingUp from './ComponentDrillingUp'

function App2() {
    const jpt=()=> {
        console.log('haha props drilling up')
    }
    return (
        <div>
            <ComponentDrillingUp handledrill={jpt} />
        </div>
    )
}

export default App2
