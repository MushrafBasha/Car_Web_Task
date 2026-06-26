import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleSignup = async () => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    alert("Account Created");
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};
return ( 
<div className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative" style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1658729585436-b918223ba6d6?w=1600&h=900&fit=crop')",
  }}> 

    <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-md border border-gray-400/30 p-6 sm:p-8 rounded-2xl shadow-xl"> 
  <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white"> Create Account </h1>

    <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"/>

    <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"/>

    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"/>

    <button onClick={handleSignup} className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition">
      Sign Up
    </button>

    <p className="text-center mt-4 text-white text-sm sm:text-base"> Already have an account?{" "}
      <Link to="/" className="text-blue-300 font-semibold hover:underline"> Login</Link>
    </p>
  </div>
</div>


);
}

export default Signup;
