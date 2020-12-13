import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("Token")
        console.log(localStorage.getItem("Token"))
    }
    render() {
        return (
            <div>
                <h1>You are Logour, For Login click below link</h1>
                <button className="btn btn-primary">
                <Link to="/"> Login</Link>
                    Login
                </button>
            </div>
        )
    }
}
