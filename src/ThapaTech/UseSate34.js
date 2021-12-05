import React,{useState} from 'react'
import '../App.css'

const UseSate34 = () => {

    let getTime = new Date().toLocaleTimeString()
    const [time, setTime] = useState(getTime)

    const UpdateTime = () => {
        getTime = new Date().toLocaleTimeString()
        setTime(getTime)
    }


    return (
        <div className="App">
            <h1>{time}</h1>
            <button onClick={UpdateTime}>Get Time</button>
        </div>
    )
}

export default UseSate34
