import { Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Home from "./pages/Home";
import Car from "./pages/Car";
import Cart from "./pages/Cart";
import Support from "./pages/Support";
import Admin from "./pages/Admin";
import SearchBar from "./pages/SearchBar";
import CarDetails from "./pages/CarDetails";

import MainLayout from "./layouts/MainLayout";
import Footer from "./pages/Footer";

function App() {
  const location = useLocation();

  const hideFooter =
    location.pathname === "/" ||
    location.pathname === "/signup";

  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

       
        <Route element={<MainLayout />}>

          <Route path="/home" element={<Home />} />
          <Route path="/car" element={<Car />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/cardetails" element={<CarDetails />} />
          <Route path="/support" element={<Support />} />
          <Route path="/search-bar" element={<SearchBar />} />
          <Route path="/admin" element={<Admin />} />   
          <Route path="/home/cardetails/:id/cart" element={<Cart />} />



        </Route>

      </Routes>

       {!hideFooter && <Footer />}
    </>
  );
}

export default App;