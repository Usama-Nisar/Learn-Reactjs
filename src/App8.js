import React,{useState} from 'react'
import './App.css'



const App8 = () => {

    let cuurTime = new Date().toDateString()
    const [time, setTime] = useState(cuurTime)

    const update = () =>{
        cuurTime = new Date().toLocaleTimeString()
        setTime(cuurTime)
    };

     setInterval(update,1000)
    return (
        <div className='App'>
            <h1>Time</h1>
            <h1>{time}</h1>
            <button onClick={update}>Update</button>
        </div>
    )
}

export default App8
