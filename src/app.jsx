import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import Shop from "./pages/shop";
import Product from "./pages/product";
import Login from "./pages/login";
import Register from "./pages/register";
import Checkout from "./pages/checkout";
// import Account from "./pages/my-account";
// import Error404 from "./pages/404"
// import Register from "./pages/register";
// import Orderdetails from "./pages/order-details";


var token = localStorage.getItem("token");


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop/:cat/:subcat/:page/:wgt/:type/:collection/:manu" element={<Shop/>} />
        <Route path="/product/:prono" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:message" element={<Login />} />
        <Route path="/register"  element={<Register />} />
        {/*<Route path="/account" element={<Account/>} />
        <Route path="/order-details/:orderId" element={<Orderdetails />} /> */}


        {/* <Route path="*" element={<Error404 />} /> Fallback route for 404 */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;