import React, { useState, useEffect } from 'react';


function UseState(){

    //const [name,setName] =  useState("Usama");
    // const name = setStateVariable[0];
    // const setName = setStateVariable[1];
    const [name, setName] = useState("Usama")
    const [age, setAge] = useState(19)

     const clickHandler = () => {
         setName("Usama Nisar");
    };

    // useEffect( () => {
    //     console.log("UseEffect Component")
    // },[age])

    return(
     <React.Fragment>
       <h1>Name : {name}</h1>
       <h1>Age : {age}</h1>
       <button onClick={clickHandler}>Change Name</button>
       <button onClick={ ()=> { setAge(20) } }>Change Date</button>
     </React.Fragment>
    );
}


export default UseState;