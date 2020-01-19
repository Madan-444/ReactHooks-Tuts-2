import React from 'react'
import {CreateContext} from '../App'

function ComponentD() {
    return (
        <div>
            <CreateContext.Consumer>
                {name => <p>Component D {name } is king </p>}
            </CreateContext.Consumer>
            
        </div>
    )
}

export default ComponentD
