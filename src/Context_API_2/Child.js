import React, {useContext} from 'react'
import counterContext from './Context_2';





 const  Child = () => {


     let counterValue = useContext(counterContext);
      console.log(counterValue)
    return(
    
         <div>
             <h1>This is a child</h1>
             <h1>{counterValue[0]}</h1>
             <button onClick={ () => { counterValue[1](++counterValue[0]) } } >
               Increament
             </button>
         </div>
       
    )
}

export default Child
