import React from 'react'



class Home extends React.Component{

    state={
        homeName : 'Nisar'
    }
    render(){
        return(
            <div>
                <button onClick={ () => this.props.NameChange(this.state.homeName)}>changeName From Home</button>
            </div>
        )
    }
}

export default Home;