import React from 'react';



class Counter extends React.Component{
    constructor(props){
        super();
        this.state = {
            age : props.initialAge,
            status : 0
        };
    }

    makeOlder = () => {
        this.setState({
            age : this.state.age + 3,
            status : this.state.status +1
        })
    }
    
    render(){
        return(
           
            <div>
                {this.props.count}
                <div>
                    <button onClick={this.props.increament}>Add</button>
                    <p>{this.props.name}</p>
                    <p>{this.state.age}</p>
                    <p>{this.state.status}</p>
                    <button onClick={this.makeOlder}>make me older</button>
                    <button onClick={this.props.greeting}>Click me</button>
                </div>
            </div>    
        )
    }
}

export default Counter;