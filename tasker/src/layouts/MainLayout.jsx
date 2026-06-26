import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;