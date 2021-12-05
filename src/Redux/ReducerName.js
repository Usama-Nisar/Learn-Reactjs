
 

const ReducerName = (state ='' , action) => { 
        
    console.log(action)
          
    if(action.type === 'CHANGE_NAME'){                     // State return javaScript object
        return   action.payload
    }
        return state;
    };

export default ReducerName;