import React from 'react';
import useCustomCounter from './Custom'

function RendCustom(){
    const data =useCustomCounter();

    return(
        <React.Fragment>
            <h1>Count Up : {data.count}</h1>
            <button onClick={data.clickHandler}>Increament</button>
        </React.Fragment>
    )
}

export default RendCustom;