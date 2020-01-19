import React from 'react'
import {CreateContext} from '../App'

function ComponentA() {
    return (
        <div>
          <CreateContext.Consumer>
                
                {user => <p>Component A I am {user} </p>}
            </CreateContext.Consumer>
        </div>
    )
}

export default ComponentA
