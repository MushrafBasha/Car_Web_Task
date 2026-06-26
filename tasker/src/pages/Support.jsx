import { useState } from "react";
import Navbar from "./Navbar";

function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    alert("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100">

     
      <div className="flex items-center justify-center px-4 py-8 sm:py-12">

        <div className="bg-white w-full max-w-md sm:max-w-lg p-6 sm:p-8 rounded-lg shadow-lg">

          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4"> Contact Support </h1>

          <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">Need help? Send us a message and our team will get back to you. </ p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>

            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>

            <textarea rows="5" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Support;