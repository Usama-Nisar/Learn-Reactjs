import React, {useContext, useReducer} from 'react';
import {Button,Container} from '@material-ui/core'





const iState = {
    name : "Usama"
}


const myContext = React.createContext(iState)



const reducer = (state,action) => {
      switch(action.type){
          case "CHANGE_NAME" :
          return{
            ...state,  
            name : action.payload
          }
          default :
          return state; 
      }
}



const Coder3 = () => {
    return(
        <div>
            <h1>I am Coder3</h1>
        </div>
       )
}

const Coder2 = () => {
    const myName = useContext(myContext)
    return(
        <div>
            <h1>I am Coder2</h1>
            <h2>{myName.name}</h2> 
            <Coder3 />
        </div>
       )
}


const Coder1 = () => {
    const myName = useContext(myContext)

    // const getName = () => {
        
    //         fetch('https://jsonplaceholder.typicode.com/users')
    //         .then( (res)=> {
    //             res.json()
    //             console.log(res)
    //         }).then((res2)=> {
    //            myName.Dispatch({type:"CHANGE_NAME", payload:res2[0].name}) 
                
    //         })
    // }
    return(
     <div>
         <h1>I am Coder1</h1>
         <Coder2 />
         <Button 
         variant="contained" color="secondary"
         onClick={ () => myName.Dispatch({type:'CHANGE_NAME', payload:'Umer'}) }  >Change Name</Button>
     </div>
    )
}



export const App4 = () => {

      const [state, dispatch] = useReducer(reducer,iState)


    return (
        <myContext.Provider value={{name:state.name , Dispatch:dispatch}}>
            <Container>
                <h1>I am App</h1>
                <Coder1 />
            </Container>
        </myContext.Provider>
    )
}
