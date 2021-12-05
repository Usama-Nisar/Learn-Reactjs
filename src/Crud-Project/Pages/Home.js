import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'C:/Users/AGA/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom'



const Home  = () => {
    
    const [user,setUser] = useState([])

    useEffect( () => {
    
        loadData();
       
     },[])

   const loadData = async () => {
        const result = await axios.get("http://localhost:3001/users")
        console.log(result)
        setUser(result.data)
    }

   const deleteUser = async (i_d) => {
         await axios.delete("http://localhost:3001/users/" + i_d);
         loadData();
   } 
 
    return(
        <div className="container">
           <h1>  Wellcome Home Page </h1>
           <br/>
           <table className="table">
                <thead className="thead-dark shadow border">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Server</th>
                    <th scope="col">Type</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map( (user,index) => (
                            <tr>
                                <td key={index}>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.author}</td>
                                <td>
                                    <Link className="btn btn-primary mr-2" to={"/user/view/"+user.id}>View</Link>
                                    <Link className="btn btn-primary  mr-2" to={"/user/edit/"+user.id}>Edit</Link>
                                    <Link className="btn btn-danger" onClick={ () => deleteUser(user.id) } >Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
         </table>
        </div>
    )
}

export default Home;


