import { useState } from "react";

function SearchBar({ setSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearch(input);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full">


      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyPress} placeholder="Search cars..." className="w-full sm:w-80 md:w-96 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

  
      <button onClick={handleSearch} className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
        Search
      </button>

    </div>
  );
}

export default SearchBar;