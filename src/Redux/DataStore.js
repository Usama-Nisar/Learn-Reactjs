import React from 'react'
import {createStore , applyMiddleware,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import  Home  from './Home';
import ReducerName from './ReducerName';
import ReducerFruit from './ReducerFruit';
import thunk from 'redux-thunk'




export const DataStore = () => {
    
    const masterReducer = combineReducers({       //State return  javaScript object
        name:  ReducerName,
        fruit: ReducerFruit
    })

    const store = createStore(masterReducer, { name:'Usama', fruit:['Apple','Orange'] } ,applyMiddleware(thunk))

    return (
        <div>
            <Provider store={store}>
                <Home />
            </Provider>
        </div>
    )
}
