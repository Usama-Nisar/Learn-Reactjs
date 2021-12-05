import React, {useState,useEffect} from 'react'

const ApiCall = () => {

      const [joke, setJoke] = useState()

      const getJoke = () => {
           
        fetch(`https://api.chucknorris.io/jokes/random`)
        .then( (res) => {
            return res.json()
        }).then((res2) => {
            console.log(res2)
            setJoke(res2.value)
        })    

      }

     useEffect(() => {
     
     getJoke()

   },[])
    
    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={getJoke}>Get New Joke</button>
            <h3>{joke}</h3>
        </div>
    )
}

export default ApiCall