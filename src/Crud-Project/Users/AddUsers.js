import React, {useState}  from 'react';
import axios from 'axios'
import {useHistory}  from 'C:/Users/AGA/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom'



const AddUsers = () => {
    
    let history = useHistory();
    const [user, setUser] = useState({
        id: "",
        title: "",
        author: ""
    });

    const {id,title,author} = user;

    const onChangeHandler = (e) => {
       setUser({...user,[e.target.name] : e.target.value})
    };

    const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users",user)
    history.push("/")
}
    

    return(
        <div className="container">
            <h1 className="text-center">Add users</h1>
            <br/>
            <form onSubmit={onSubmitHandler}>
            <div class="form-group">
                <input type="text" className="form-control"  
                placeholder="Enter your username" name="id" 
                value={id} onChange={onChangeHandler}/>
            </div>    
            <div class="form-group">
                <input type="text" className="form-control"  
                placeholder="Enter your Server" name="title"  
                value={title} onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control"  
                placeholder="Enter your Type" name="author" 
                value={author} onChange={onChangeHandler}/>
            </div>
            <div>
                <button className="btn btn-primary btn-block">Add User</button>
            </div>
            </form>
        </div>
    )
};

export default AddUsers;