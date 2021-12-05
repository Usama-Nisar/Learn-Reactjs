import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

     let [count, dispatch] = useReducer(CounterReducer, 0) //deStructuring
     console.log(count)
    return(
        <div>
         <h2>Count value is {count}</h2>   
         <button onClick={ () => {dispatch({type : 'Increament'})} }>Increament</button>
         <button onClick={ () => {dispatch({type : 'Decreament'})} }>Decreament</button>
        </div>
    )
}

export default Child2;
