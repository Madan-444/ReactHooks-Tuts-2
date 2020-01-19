import React,{useState} from 'react'

function ObjectAsState() {
    const [name,setName] = useState({firstName:'',lastName:''})
    return (
        <div>
            <div>
                <h1>First Name-{name.firstName} </h1>
            </div>
            <div>
                <h1>Last Name-{name.lastName} </h1>
            </div>
            <input type='text' value={name.firstName} onChange={(e)=> setName({...name,firstName:e.target.value})} />
            <input type='text' value={name.lastName} onChange={(e)=> setName({...name,lastName:e.target.value})} />
            <div> {JSON.stringify(name)} </div>
            
        </div>
    )
}

export default ObjectAsState
