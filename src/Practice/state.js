import React from 'react';
import Counter from './Counter';




class State extends React.Component{

    constructor(){
        super();

        this.state = {
            count : 0,
            text : "Hello"
        };

        this.increament = this.increament.bind(this);
    }

    increament(){
        this.setState({
          count : ++this.state.count
        });
    }
  onGreet = () =>{
      alert("Hello From Parent Component");
  }
    render(){
        return(
        <div className="container">
           <Counter  
            count={this.state.count}
            increament = {this.increament}
            name={"Usama Nisar"}
            initialAge = {25}
            greeting = {this.onGreet}
            />
           
        </div>    
        )
    }
}

export default State;