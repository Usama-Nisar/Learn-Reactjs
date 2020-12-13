import React, {useState, useEffect } from 'react';



function UseEffectHook(){

    const [count, setCount] =  useState(0);
    
    const [count1, setCount1] =  useState(50);

    const clickHandler = () => {
        setCount(count + 1); 
};

   const clickHandler2 = () => {
       setCount1(count1 - 1);
   };
    
    useEffect(() => {
        console.log("useEffect State");
    });

    return(
      <React.Fragment>
          <h1>count : {count} </h1>
          <button onClick={clickHandler}>Increament</button>

          <h1>countDown : {count1} </h1>
          <button onClick={clickHandler2}>Decreament</button>
      </React.Fragment>
    );
}

export default UseEffectHook;