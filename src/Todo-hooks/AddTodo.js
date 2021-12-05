import React, { useState } from 'react'
import './Todo.css'

let id = ''

const AddTodo = () => {

    const [item, setItem] = useState('')
    const [todos, setTodos] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
    }


    const addTodos = () => {
        if(!item){

        }else{
            setTodos([...todos, item])
            setItem('')
        }
    }

    const deleteItem = (index) => {
         console.log(index)
         const updateTodos = todos.filter((ele,id) => {
              return id !== index;
         })
         setTodos(updateTodos)
    }


    const editItem = (index) => {
        id = index
        setItem(todos[id])
    }


    const updateItem = (e) => {
        console.log(id)
        const updateTodos = [...todos]
        updateTodos[id] = item;
        setTodos(updateTodos)
        setItem('')
    }

    const removeAll = () => {
        setTodos([])
    }


    return (
        <div className="Todo container">
            <h1>Todo App</h1>
            <br />
            <br />
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={item}
                    onChange={ (e) => {setItem(e.target.value)} }
                    placeholder="Enter Todo" />
                <button type="button" onClick={addTodos} className="btn btn-success">Add</button>
                <button type="button" onClick={(e)=>updateItem(e)} className="btn btn-info">update</button>
                <ul>
                    {
                        todos.map((todos, index) => {
                            return (
                                <li key={index}>{todos}
                                    <span className="delete btn btn-danger" onClick={() => deleteItem(index) }>delete</span>
                                    <span className="edit btn btn-success" onClick={(e)=>editItem(index)}>Edit</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <span className="delete btn btn-danger" onClick={removeAll}>Remove All</span>
            </form>
        </div>
    )
}

export default AddTodo
