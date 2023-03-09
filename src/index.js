import React from 'react';
import ReactDOM from 'react-dom/client';
// import { initializeApp } from "firebase/app";
import './css/index.css'; 
import App from './App';

// const REACT_APP_FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
// const REACT_APP_FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID

// const firebaseConfig = {
//     apiKey: REACT_APP_FIREBASE_API_KEY,
//     authDomain: "beacon-budget.firebaseapp.com",
//     projectId: "beacon-budget",
//     storageBucket: "beacon-budget.appspot.com",
//     messagingSenderId: "791838252179",
//     appId: REACT_APP_FIREBASE_APP_ID,
//   };

// initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
    

);