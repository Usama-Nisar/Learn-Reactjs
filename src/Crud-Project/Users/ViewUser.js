import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link,useParams} from 'C:/Users/AGA/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom'


const ViewUser = () => {

    let {i_d} = useParams();
    const [user, setUser] = useState({
        id: "",
        title: "",
        author: ""
    });

    const {id,title,author} = user;

    useEffect( () => {
    
        loadData();
       
     },[])
    
    const loadData = async () => {
        const result = await axios.get("http://localhost:3001/users/"+ i_d )
        setUser(result.data)
    }


    return (
        <div className="container">
            <h1 className="display-4">User Id: {i_d}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Id: {id}</li>
                <li className="list-group-item">Title: {title}</li>
                <li className="list-group-item">Author: {author}</li>
            </ul>
            <br/>
            <Link className="btn btn-primary" to="/">Home</Link>
        </div>
    );
}

export default ViewUser;