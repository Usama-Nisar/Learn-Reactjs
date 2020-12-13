import React from 'react';
import './Todo.css';

 
let getId = "";
class AddTodo extends React.Component{
    
    

    state = {
        item : "",
        Todos:[]
    }

    changeHandler = (event) =>{

      var inputValue = event.target.value;
      this.setState({
          item : inputValue,
      });

    }

    addItem = () =>{

        var inputValue = this.state.item;
        var newTodo = this.state.Todos;
        newTodo.push(inputValue)
        this.setState({
            Todos : newTodo
        });
        console.log(this.state.Todos);

    }

    deleteItem = (event) => {

        var id = event.target.id;
        var newTodo = this.state.Todos;
        newTodo.splice(id,1)
        this.setState({
            Todos : newTodo
        });

    }

    editItem = (event) => {
        
        getId = event.target.id;
        this.setState({
            item: this.state.Todos[getId]
        })
        document.getElementById("add").style.display = "none";

    }

    updateItem = () =>{

          var editTodo = this.state.Todos;
          editTodo[getId] = this.state.item;

          this.setState({
          Todos : editTodo,
        })
        document.getElementById("add").style.display = "inline-block";
    }

    submitHandler = (event) =>{

         event.preventDefault()
         this.setState({
             item : ""
         });
         
    }



    render(){
        return(
            <div className="Todo container">
               <h1>Todo List</h1>
                 <br/>
                     <form onSubmit={this.submitHandler}>
                        <input  type="text"   onChange={this.changeHandler}   value={this.state.item}/>
                          <button  id="add"  onClick={this.addItem} className="btn btn-success">Add</button>
                          <button  id="update"  onClick={this.updateItem} className="btn btn-info">update</button>
                            <ul>
                                {this.state.Todos.map( (Todos,index) => {
                                return   <li key={index}>{Todos}
                                 <span onClick={this.deleteItem} id={index} className="delete btn btn-danger">delete</span>
                                 <span onClick={this.editItem} id={index} className="edit btn btn-success">Edit</span>
                                 </li>;
                            })}
                        </ul>
                 </form>       
            </div>
        );
    }
}
export default AddTodo;