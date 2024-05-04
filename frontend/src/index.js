// import React from 'react';
// import ReactDOM from 'react-dom';   // original its like 'react-dom/client'
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';  //redux change
// import Store from './redux/store.js';     //redux change  //me change .js

// const root = ReactDOM.createRoot(document.getElementById('root'));    //original
// root.render(                         // original
//   <App/>                             // original
// );                                  // original

// ReactDOM.render(                        // redux change
//   <Provider store={Store}>             // redux change
//     <App/>                                 // redux change
//   </Provider>,                              // redux change
//   document.getElementById("root")         // redux change
// );

// reportWebVitals();             // redux change


//////////////redux version error fixed
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './redux/store';

const root = createRoot(document.getElementById('root')); // Use createRoot instead of ReactDOM.render
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

reportWebVitals();
