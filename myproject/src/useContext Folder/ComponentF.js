import React from 'react'
import {CreateContext} from '../App'

function ComponentF() {
    return (
        <div>
            <CreateContext.Consumer>
                {name => <p>Component F  My name is {name} </p>}
            </CreateContext.Consumer>
        </div>
    )
}

export default ComponentF
