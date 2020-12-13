import React from 'react';
import  './Main.css';


class AddTodo extends React.Component{

    state = {
        Todotext : ""
    };
   
    submitHandler = (event) => {
         event.preventDefault();
         this.props.addTodotoState(this.state.Todotext)
         
         this.setState({
             Todotext : ""
         });
    };

    ChangeTodoText = (event) => {
            this.setState({
            Todotext : event.target.value
        })
    };   

    render(){
        return(
            <div className="Main">
                <form onSubmit={this.submitHandler}>
                    <input type="text"   onChange = {this.ChangeTodoText}  value = {this.state.Todotext}/>
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}
export default AddTodo;