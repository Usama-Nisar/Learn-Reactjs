import React from 'react';
import AddTodo from './AddTodo'
import './Todo.css';


class Todo extends React.Component{

    render(){
        return(
            <div>
               <AddTodo  />
            </div>
        )
    }
}

export default Todo;