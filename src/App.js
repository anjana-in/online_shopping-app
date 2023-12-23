
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import {ShopContextProvider} from './context/shop-context';


function App() {
  return (
   
    <div className="App">
      
      <ShopContextProvider >
      <BrowserRouter>
     
      <NavBar/>
      
      <Routes>
      
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
     
      </Routes>
     
    </BrowserRouter>
    </ShopContextProvider>
    </div>
    
  );
}

export default App;
