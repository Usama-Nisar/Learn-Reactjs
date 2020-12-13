import React from 'react';
import Main from './Main';
 class Home extends React.Component{
    render(){    
        return(
            <div>
                <p>{this.props.firstname}</p>
            </div>
        );
    }
}

export default Home;