import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {CreateContext,PhoneNumber} from '../App'

function ComponentE() {
    let user = useContext(CreateContext)
    let number = useContext(PhoneNumber)
    return (
        <div>
            <ComponentF />
            <div>
                My Name is {user} and myPhone number is {number}
            </div>
        </div>
    )
}

export default ComponentE
