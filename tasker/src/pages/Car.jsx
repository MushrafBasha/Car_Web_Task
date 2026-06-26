import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Car() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const snapshot = await getDocs(collection(db, "cars"));

      const carList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCars(carList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) =>
    car.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
          Available Cars
        </h1>

        <div className="flex justify-center mb-6 sm:mb-8 px-2">
          <input
            type="text"
            placeholder="Search Cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-96 p-3 border rounded-lg shadow-sm focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={
                  car.image ||
                  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
                }
                alt={car.name}
                className="w-full h-44 sm:h-52 object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {car.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  ₹{car.price}
                </p>

                <button
                  onClick={() =>
                    navigate("/cardetails", {
                      state: { car },
                    })
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg w-full sm:w-auto"
                >
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

export default Car;