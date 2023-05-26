import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Login from "./pages/Login/Login";
import CartDeatils from "./components/CartDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
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
          <Route path="/Login" element={<Login />} />
          <Route path="/cartdetails" element={<CartDeatils />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
