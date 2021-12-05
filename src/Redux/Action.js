

// export const actions = (name) => {
//     return {

//         type: 'CHANGE_NAME', 
//         payload: name 
//     }
// }

export const actions = () => {
    return (Dispatch) => {
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(res2=>{
            Dispatch({type:"CHANGE_NAME", payload: res2[0].name})
        })
    }
}

