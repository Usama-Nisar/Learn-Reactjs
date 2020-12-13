import React from 'react';



class ArrayMap extends React.Component{

    constructor(){
        super();

        this.state = {
          Name : "Fruit Names",
          Fruits : ["Apple","Bnana","Orage"]
        };
    }    
    render(){
        return(
            <div>
                <br/>
                {this.state.Name}
                <ul>
                {this.state.Fruits.map( (Fruits,index) => {
                     return <li key={index}> {Fruits}</li>;
                 })}
                </ul>
            </div>    
        );
    }
}

export default ArrayMap;