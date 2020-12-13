import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

     let [state, dispatch] = useReducer(CounterReducer, 10) //deStructuring
     console.log(state)
    return(
        <div>
         <h1>State value is {state}</h1>   
         <button onClick={ () => {dispatch('INCREMENT')} }>Increament</button>
        </div>
    )
}

export default Child2;
