import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import MenuBar from './components/MenuBar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <div> 
    <BrowserRouter> 
    <MenuBar/>
      <Routes>
        <Route path='/' element={<ProductsPage />}/>
        <Route path='cart' element = {<CartPage />}/>
        <Route path = '/*' element = {<div>404</div>}/>
      </Routes>
    </BrowserRouter>
  </div>
);

reportWebVitals();



