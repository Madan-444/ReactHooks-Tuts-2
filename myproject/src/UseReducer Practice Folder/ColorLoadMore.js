import React, { useState, useReducer } from 'react'
const allData = new Array(31).fill(0).map((_val, i) => i + 1)
var perPage=5

var initialState = {
    loading: false,
    data: [],
    more: true,
    after: 0
}
const reducer = (state, action) => {
    switch(action.type){
        case 'load':
            return {
                ...state,
                loading:true
            }
        case 'data':
            return {
                ...state,
                loading:false,
                data:[...state.data,...action.newData],
                more:action.newData.length === perPage,
                after:state.after +action.newData.length
            }
    }

}
function ColorLoadMore() {
   
    const [state, dispatch] = useReducer(reducer, initialState)
    const {loading,data,after,more} = state
    const newData = allData.slice(after,after + perPage)
    return (
        <div className='text-center'>
            {loading && <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>}
            <ol>
                {data.map(item => (
                    <button type="button" class="btn btn-secondary btn-lg btn-block"> Button {item} </button>
                ))}
            </ol>
            {!loading && more && 
            <button type="button" class="btn btn-success  btn-lg" onClick= {()=> {dispatch({type:'load'});
            dispatch({type:'data',newData})}} 
         >Large button</button>}
        </div>
    )
}

export default ColorLoadMore
