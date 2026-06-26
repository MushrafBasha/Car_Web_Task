import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cars from "../data/cars.json";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="text-center px-4 py-10 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-500">
          CAR WAREHOUSE
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-2">
          Take Phone To Buy Cars Easily and Securely with our App and Website.
        </p>
      </div>

      <div className="flex justify-center px-4">
        <div className="flex w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
          <input
            type="text"
            placeholder="Search Cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border p-3 sm:p-4 rounded-l-full focus:outline-none"
          />

          <button className="bg-blue-500 text-white px-4 sm:px-6 rounded-r-full hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Featured Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-44 sm:h-52 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {car.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {car.price}
                </p>

                <button onClick={() => {  console.log("Button Clicked");
                                        console.log(car);navigate("/cardetails", {state: { car },})}} className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No cars found
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;