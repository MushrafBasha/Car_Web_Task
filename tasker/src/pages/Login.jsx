import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Success");
      navigate("/home");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1658729585436-b918223ba6d6?w=1600&h=900&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-md border border-gray-400/30 p-6 sm:p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>

        <p className="text-center mt-4 text-white text-sm sm:text-base">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-400 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;