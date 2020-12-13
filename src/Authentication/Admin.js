import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'

export default class Admin extends Component {
    constructor(props){
     super(props)   
        const Token = localStorage.getItem("Token")
          console.log(Token)
        let loggIn = true
        if(Token == null){
            loggIn = false
        }
        this.state = {
            loggIn
        }
    }
    render() {
        if(this.state.loggIn === false){
            return <Redirect to="/"  />
        }
        return (
            <div className="container">
                <h1>Wellcome to Admin page, For Logout click below link</h1>
                <Link to="/Logout">Logout </Link>
            </div>
        )
    }
}
