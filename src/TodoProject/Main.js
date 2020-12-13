import React from 'react';
import AddTodo from './AddTodo';
import  './Main.css';

 class Main extends React.Component{

    state = {
        Todos : [
            {
                text: "Banana"
            },
            {
                text: "Apple"
            }
                ]
    };

    addTodotoState = (text) => {
       const newTodos = this.state.Todos.concat({
            text
        });

        this.setState({
            Todos : newTodos
        });
    };

    render(){
        return(
          <div className="Main">
               <ul>
                   {this.state.Todos.map( (Todos,index) => {
                     return   <li key={index}>{Todos.text}</li>;
                   })}
               </ul>
               <AddTodo addTodotoState={this.addTodotoState}/>
          </div>
        );
    }
}
export default Main;