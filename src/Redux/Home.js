import React from 'react'
import {connect} from 'react-redux'
import {actions} from './Action'


 const Home = (props) => {
 
     const myFruit = props.myFruit.map( (myFruit,index) => {
         return <h1 key={index}>{myFruit}</h1>
     })
     console.log(props)

    return (
        <div>
            <h1>Home Component</h1>
            <h1>My name is {props.myName}</h1>
            <br/>
            <button onClick={ () => {props.changeName()} }>Change It</button>
            <br/>
            <h1>My Fruites is {myFruit}</h1>
            <button onClick={ () => {props.addFruit('Grape')} }>Add Fruit</button>
        </div>
    )
}

const mapStateToProps = (state) => {                 // Take State as Augument 
    return {                                         // Return Object

        myName :  state.name,
        myFruit : state.fruit
        
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return{
         changeName : () => { dispatch(actions()) },

         addFruit  : (item) => { dispatch({type:'ADD_FRUIT',payload:item}) }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);