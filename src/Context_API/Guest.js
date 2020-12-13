import React, { Component } from 'react'
import {Consumer} from './Context'
export default class Guest extends Component {
    render() {
        return (
            <div>
                <h1>Guest Componet</h1>
                <Consumer>
                    { ({data, Handler}) => (
                     <div>
                       <h1>
                         Name: {data.name}  Age : {data.age}
                       </h1>
                       <button onClick={Handler}>Increase</button>
                    </div>
                    )}
                </Consumer>
            </div>
        )
    }
}
