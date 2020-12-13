import React, { Component } from 'react'
import User from './User';
import {Provider} from './Context'



export default class App1 extends Component {
    state = {
        name : "Usama Nisar",
        age: 10
    }

    makeAgeOlder = () => {
        this.setState({
            age : this.state.age + 1
        })
    }

    render() {

        const contextData  = {
            data : this.state,
            Handler : this.makeAgeOlder
        }

        return (
            <div>
                <h1></h1>
                <Provider value={contextData}>
                    <User />
                </Provider>
            </div>
        )
    }
}
