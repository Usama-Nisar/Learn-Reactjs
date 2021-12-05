import React,{useState} from 'react'
import '../App.css'

const Form35 = () => {

    const [text, setText] = useState()

    const [fulltext, setFullText] = useState()

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    const fullname = () => {
      setFullText(text)
    }
    return (

        <div className="App">
            <h1>Hello {fulltext}</h1>
            <input 
             type="text"
             placeholder="Enter Name"
             value={text}
             onChange={onChangeText}/>
             <button onClick={fullname}>Submit</button>
        </div>
    )
}

export default Form35
