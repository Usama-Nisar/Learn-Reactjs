import React from 'react'
import Home from './Home'


class App7 extends React.Component{

    state ={
        name : 'Usama'
    }

    changeName(name){
        this.setState({
            name:name
        })
    }


    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <Home  NameChange={ (name) => this.changeName(name)}  />
            </div>
        )
    }
}


export default App7;