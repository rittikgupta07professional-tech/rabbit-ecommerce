import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import UserLayout from "./Components/Layout/UserLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Collection from "./Pages/Collection";
import ProductDetails from "./Components/Products/ProductDetails";
import Checkout from "./Components/Cart/Checkout";
import OrderConfirmation from "./Pages/OrderConfirmation";
import OrderDetails from "./Pages/OrderDetails";
import MyOrder from "./Pages/MyOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User Layout */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<Collection />} />
          <Route path="product/:id" element={<ProductDetails/>} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="order-confirmation" element={<OrderConfirmation/>} /> 
          <Route path="order/:id" element={<OrderDetails/>} />
          <Route path="my-orders" element={<MyOrder/>} />
        </Route>
        <Route>{/* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
