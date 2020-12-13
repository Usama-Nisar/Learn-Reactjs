import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props)

        const Token = localStorage.getItem("Token")
        let loggIn = true
        if(Token == null){
            loggIn = false
        }

        this.state = {
            userName : "",
            password : "",
            loggIn
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    submitHandler = (e) => {
           e.preventDefault();
           const {userName, password} = this.state
           //login 
           if(userName === "A" && password === "B"){
               localStorage.setItem("Token","jshajksakjsjksa")
               
               this.setState({
                   loggIn : true
               })
           }
    }

    render() {
        if(this.state.loggIn){
            return <Redirect to="/admin" />
        }
        return (
            <div className="container">
                <h1>Login Page</h1>
                <br/>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.userName} name="userName" onChange={this.changeHandler}/>
                    <br/>
                    <br/>
                    <input type="password" value={this.state.password} name="password" onChange={this.changeHandler}/>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
