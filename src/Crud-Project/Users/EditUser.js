import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useHistory, useParams}  from 'C:/Users/AGA/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom'



const EditUser = () => {
    
     let {i_d} = useParams();
    let history = useHistory()
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
    await axios.put("http://localhost:3001/users/"+ i_d,user)
    history.push("/")

}

useEffect( () => {
    
    loadData();
   
 },[])

const loadData = async () => {
    const result = await axios.get("http://localhost:3001/users/"+ i_d )
    setUser(result.data)
}
    return(
        <div className="container">
        <h1 className="text-center">Edit users</h1>
        <br/>
        <form onSubmit={onSubmitHandler}>
        <div class="form-group">
            <input type="text" className="form-control"  
            placeholder="Enter your Id" name="id" 
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
            <button className="btn btn-warning btn-block">Edit User</button>
        </div>
        </form>
    </div>
    )
};

export default EditUser;