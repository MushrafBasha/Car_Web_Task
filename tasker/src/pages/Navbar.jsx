import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-black shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">


        <div className="items-center gap-5">
            <img src={logo} alt="Logo" className="h-24 md:h-28 lg:h-32 xl:h-36 w-auto"/>
{/* 
              <h1 className="text-white text-xl sm:text-2xl font-bold">Auto Drive Cars</h1> */}

               </div> 
   
        <div className="hidden md:flex gap-6 items-center">

          <Link to="/home" className="text-white hover:text-gray-200">Home</Link>

          <Link to="/car" className="text-white hover:text-gray-200">Cars</Link>

          <Link to="/admin" className="text-white hover:text-gray-200">Admin</Link>

          <Link to="/support" className="text-white hover:text-gray-200">Support</Link>

          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600">
            Logout
          </button>

        </div>

      
        <button className="md:hidden text-white text-3xl" onClick={() => setOpen(!open)}> ☰ </button>

      </div>

   
      {open && ( <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-pink-600">

          <Link to="/home" onClick={() => setOpen(false)} className="text-white">Home</Link>

          <Link to="/car" onClick={() => setOpen(false)} className="text-white">Cars</Link>

          <Link to="/admin" onClick={() => setOpen(false)} className="text-white">Admin</Link>

          <Link to="/support" onClick={() => setOpen(false)} className="text-white">Support</Link>

          <button onClick={() => {handleLogout(); setOpen(false);}} className="bg-yellow-500 px-4 py-2 rounded text-white w-full">
            Logout
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;