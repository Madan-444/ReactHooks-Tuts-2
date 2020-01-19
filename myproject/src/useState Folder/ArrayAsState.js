import React,{useState} from 'react'

function ArrayAsState() {
    const [items,setItems] = useState([])
    const addItems=()=> {
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*20 ) +1
        }])
    }
    return (
        <div>
            <button onClick={addItems}>Add items</button>
            <ul>
                {items.map(item=> <li key={item.id}> {item.value} </li>)}
            </ul>
            
        </div>
    )
}

export default ArrayAsState
