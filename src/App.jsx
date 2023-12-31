import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NotFound from "./components/notFound/NotFound";
import Category from "./components/category/Category";
import { Footer } from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Detail from "./components/detail/Detail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (    
    <BrowserRouter>
      <CartProvider>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:idCategory' element={<Category />} />
            <Route path='/detail/:idProduct' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <ToastContainer hideProgressBar />
        </main>      
        <Footer />
        
      </CartProvider>      
    </BrowserRouter>    
  )
}

export default App
