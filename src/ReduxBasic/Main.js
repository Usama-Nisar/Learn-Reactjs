import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import ChangeName2 from './ActionCreator/ChangeName2';

const Main = ({myName, changeName}) => {
   
    return (
        <div className="App">
            <h1>Redux  Practice</h1>
            <h1>{myName}</h1>
            <button onClick={ ()=>{changeName()}  }>Change Name</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myName : state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
       changeName : () => {dispatch(ChangeName2())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)
