import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory.jsx';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product';
import Footer from './components/Footer/Footer.jsx';
import LoginSignup from "./pages/LoginSignup";
import men_banner from './components/Assests/banner_mens.png'
import women_banner from './components/Assests/banner_women.png'
import kids_banner from './components/Assests/banner_kids.png'
import Cart from './pages/Cart.jsx';
function App() {
  return (
    <div  >
      <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      </div>
      
     
    </div>
    

  );
}

export default App;
