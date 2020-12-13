import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Todo from './TodoBasic/Todo';
//import State from './Practice/state';
import * as serviceWorker from './serviceWorker';
 import { BrowserRouter } from 'react-router-dom';
// import App1 from './Context_API/App1';
 import App2 from './Context_API_2/App2'
// import App from './App'
// import UseState from './Hook/UseState';


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

ReactDOM.render(
  // <BrowserRouter>
        <App2 />
  // </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
