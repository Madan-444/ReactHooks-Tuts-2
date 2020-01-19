import React, { useState,useEffect} from 'react'
import axios from 'axios'

function DataFeching1() {
    const[posts,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idfrombutton,setidfrombutton] = useState(1)

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombutton}`)
        .then((response)=> {
            setPost(response.data)
            console.log(response.data)

        })
        .catch((err)=> {
            console.log(err)
        })
    },[idfrombutton])
    return (
        <div>
            <input  value={id} onChange={(e)=> setId(e.target.value)}  />
            <button type='submit' onClick={()=> setidfrombutton(id) }>Enter the number</button>
            <div>
                <p> {posts.title} </p>
            </div>
            
        </div>
    )
}

export default DataFeching1
