import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OutlinedCard from './OutlinedCard';
import Introduction from './Introduction';
import Product2 from './Product2';
import Product3 from './Product3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>{/* エラーが出たら消す */}
    <App />
    <Introduction/>
    <OutlinedCard/>
    <Product2/>
    <Product3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
