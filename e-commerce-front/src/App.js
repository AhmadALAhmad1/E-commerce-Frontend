import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import CartDetails from "./components/CartDetails";
import Error from "./components/Error";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from "./pages/Login/Register";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";
import DashboardSide from "./pages/Dashboard/DashboardSide";
import Products from "./pages/Dashboard/Products";
import AddProducts from "./pages/Dashboard/AddProducts";
import UpdateProduct from "./pages/Dashboard/UpdateProduct";
import Users from "./pages/Dashboard/Users";
import Orders from "./pages/Dashboard/Orders";
import secureLocalStorage from "react-secure-storage";
import { Navigate } from "react-router-dom";

function App() {


  const isAdmin = secureLocalStorage.getItem("role") === "admin";
  const checkAdminAccess = (element) => {
    return isAdmin ? element : <Navigate to="/Error" replace />;
  };
  console.log("IsAdmin:", isAdmin);


  return (
    <>
        <BrowserRouter>

      <ToastContainer />

      <div className="App">

          <Nav />
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:productID" element={<CartDetails />} />
            <Route path="shop/:productID" element={<CartDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/error" element={<Error />} />
            {/* ////////////Dashboard/////////// */}


            <Route
            
              path="/dashboard/*"
              element={checkAdminAccess(<DashboardSide />)}
            />

            <Route
              path="/products"
              element={checkAdminAccess(<Products />)}
            />

            <Route
              path="/products/add"
              element={checkAdminAccess(<AddProducts />)}
            />

            <Route
              path="/products/update/:itemID"
              element={checkAdminAccess(<UpdateProduct />)}
            />

            <Route
              path="/users"
              element={checkAdminAccess(<Users />)}
            />


            <Route
              path="/orders"
              element={checkAdminAccess(<Orders />)}
            />


          </Routes>
          <Footer />
      </div>
      </BrowserRouter>

    </>
  );
}

export default App;
