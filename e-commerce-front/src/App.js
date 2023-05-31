import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import CartDeatils from "./components/CartDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from "./pages/Login/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop/:productID" element={<CartDeatils />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
