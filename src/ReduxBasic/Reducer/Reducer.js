

import React from 'react'


const iState = {
    name: 'Usama Nisar',
    hobby: ['play', 'code', 'eat']
}

const Reducer = (state= iState, action) => {
    console.log(action)
    const  {type,payload} = action
    if(type === 'CHANGE_NAME'){
        return{
            name:payload
        }
    }
   return state
}

export default Reducer
