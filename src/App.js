import React from 'react';
// import './App.css';
// import Student from './Student'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {  Route, Switch } from 'react-router-dom';
import Home from './Crud-Project/Pages/Home';
import About from './Crud-Project/Pages/About';
import Contact from './Crud-Project/Pages/Contact';
import Menu from './Crud-Project/Navbar/Menu';
import AddUsers from './Crud-Project/Users/AddUsers';
import EditUser from './Crud-Project/Users/EditUser';
import ViewUser from './Crud-Project/Users/ViewUser';


class App extends React.Component{
//  constructor(){
//    super();
//    this.state ={
//      name: "Usama",
//      roll: 101
//    }
//    console.log("Constructor")
//  }
//  componentDidMount = () =>{
//        console.log("ComponentDidMount")
//  }

//  componentDidUpdate = (prevProps,prevState) => {
//      console.log("componentDidUpdate",prevProps,prevState)
//  }
  render(){
    console.log("Rendered")
    return(
      <div>
        {/* <Student rollNumber={this.state.roll} />
        <h1>Hello,  {this.state.name}</h1>
        <button className="btn btn-primary"  onClick={ ()=> { this.setState({name:"nisar"}) } }>Click here</button> */}
        <Menu />
        <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact />
                <Route path="/contact" component={Contact} exact/>
                <Route path="/users/add" component={AddUsers} exact/>
                <Route path="/user/edit/:i_d" component={EditUser} exact/>
                <Route path="/user/view/:i_d" component={ViewUser} exact/>
        </Switch>

      </div>
    )
  }
}

export default App;
