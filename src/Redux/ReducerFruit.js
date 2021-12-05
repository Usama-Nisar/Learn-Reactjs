
 

const ReducerFruit = (state=[]  , action) => { 
        
    if(action.type === 'ADD_FRUIT'){
        return  [...state , action.payload]
    }
    return state
    };

export default ReducerFruit;