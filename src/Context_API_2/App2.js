import React, {useState} from 'react';
import Parent from './Parent';
import counterContext from './Context_2';

 const App2 = () => {

     let setCount = useState(1)
    return(
         <counterContext.Provider value={setCount}>
             <Parent />
         </counterContext.Provider>
    )
}

export default App2