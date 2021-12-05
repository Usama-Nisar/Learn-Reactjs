import React from 'react';
import './Todo.css';


let getId = "";
class AddTodo extends React.Component {



    state = {
        item: "",
        Todos: []
    }

    changeHandler = (e) => {

        this.setState({
            item: e.target.value,
        });

    }

    addItem = (e) => {
        var newTodo = this.state.Todos;
        newTodo.push(this.state.item)
        this.setState({
            Todos: newTodo
        });
        console.log(this.state.Todos);

    }

    deleteItem = (e) => {

        var id = e.target.id;
        var newTodo = this.state.Todos;
        newTodo.splice(id, 1)
        this.setState({
            Todos: newTodo
        });

    }

    editItem = (event) => {

        getId = event.target.id;
        this.setState({
            item: this.state.Todos[getId]
        })
        document.getElementById("add").style.display = "none";
        document.getElementById("update").style.display = "inline";
        document.getElementsByClassName('edit')[getId].style.display = 'none'
        event.target.parentNode.style.border = '2px solid red';
        // event.target.style.display="none"

    }

    updateItem = (event) => {

        var editTodo = this.state.Todos;
        editTodo[getId] = this.state.item;

        this.setState({
            Todos: editTodo,
        })
        document.getElementById("add").style.display = "inline";
        document.getElementById("update").style.display = "none";
        document.getElementsByClassName('edit')[getId].style.display = 'inline'
       
       

    }

    submitHandler = (event) => {

        event.preventDefault()
        this.setState({
            item: ""
        });

    }



    render() {
        return (
            <div className="Todo container">
                <h1>Todo List</h1>
                <br />
                <form onSubmit={this.submitHandler}>
                    <input type="text" onChange={this.changeHandler} value={this.state.item} />
                    <button id="add" onClick={this.addItem} className="btn btn-success">Add</button>
                    <button id="update" onClick={this.updateItem} className="btn btn-info">update</button>
                    <ul>
                        {
                            this.state.Todos.map((Todos, index) => {
                                return <li key={index}>{Todos}
                                    <span onClick={this.deleteItem} id={index} className="delete btn btn-danger">delete</span>
                                    <span onClick={this.editItem} id={index} className="edit btn btn-success">Edit</span>
                                </li>;
                            })
                        }
                    </ul>
                </form>
            </div>
        );
    }
}
export default AddTodo;