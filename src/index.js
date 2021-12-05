import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Main from './ReduxBasic/Main'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import reducer from './ReduxBasic/Reducer/Reducer';






// let currDate = new Date(2020, 11, 20, 14);
// currDate = currDate.getHours();
// let greeting = "";

// const cssStyle = {};

// if(currDate >= 1 && currDate < 12){
//    greeting = "Good Moring"
//    cssStyle.color = "green";
// }else if(currDate >=12 && currDate < 19){
//    greeting = "Good Afternoon";
//    cssStyle.color = "Orange";
// }else{
//   greeting = "Good Night";
//   cssStyle.color = "Black";
// }

let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider  store={store} >
    <Main/>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
