import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import MenuBar from './components/MenuBar';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsPage />
  /*<BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />}/>
        <Route path="/cart" element = {<CartPage />}/>
        <Route path = "/*" element = {<div>404</div>}/>
      </Routes>
  </BrowserRouter> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
