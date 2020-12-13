import {useState} from 'react';


function useCustomCounter(){
    const [count, setCount] = useState(0)

    const clickHandler = () =>{
        setCount(count + 1);
    };

    return{
        count,
        clickHandler
    };
}

export default useCustomCounter;

