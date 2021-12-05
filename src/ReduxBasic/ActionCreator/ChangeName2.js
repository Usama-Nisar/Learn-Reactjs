

import React from 'react'

// const ChangeName2 = (name) => {
//     return (
//         {
//             type:'CHANGE_NAME',
//             payload: name
//         }
//     )
// }

const ChangeName2 =  () => {
    return  async (dispatch) =>{
          const res = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await res.json()
          //console.log(JSON.stringify(data))
          dispatch({type:'CHANGE_NAME', payload: data[0].name})
              
    }
}

export default ChangeName2
