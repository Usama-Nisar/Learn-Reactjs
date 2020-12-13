import React from 'react';


export default class Student extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        myRoll : props.rollNumber
        }
    }

    changeRollnumber = () => {
        this.setState({
            myRoll : this.state.myRoll +1
        })
    }
    render(){
        return(
            <div>
                 <h1>{this.state.myRoll}</h1>
                 <button onClick={this.changeRollnumber} className="btn btn-primary">Click here for change roll number</button>
            </div>
        )
    }
}