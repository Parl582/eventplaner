// import React from 'react';
// import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter basename='eventplanner'>
//        <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// <=====TO REMOVE THE ERROR:Warning: ReactDOM.render is no longer 
// supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter basename='eventplanner'>
        <App />
     </BrowserRouter>
  </React.StrictMode>
);
