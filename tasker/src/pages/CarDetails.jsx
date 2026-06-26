import { useLocation, useNavigate } from "react-router-dom";

function CarDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const car = location.state?.car

  
  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Car Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-auto bg-gray-100 px-4 py-6 sm:py-10">

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6">

  
          <div>
            <img src={car.image}alt={car.name}className="w-full h-60 sm:h-80 object-cover rounded-lg"/>
          </div>

       
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">{car.name}</h1>

            <p className="text-xl sm:text-2xl text-green-600 font-bold mb-4">{car.price}</p>

            <div className="space-y-2 text-gray-700 text-sm sm:text-base">
              <p><strong>Brand:</strong> {car.brand}</p>
              <p><strong>Fuel Type:</strong> {car.fuel}</p>
              <p><strong>Transmission:</strong> {car.transmission}</p>
              <p><strong>Description:</strong> {car.description}</p>
            </div>

  
            <div className="flex flex-col sm:flex-row gap-3 mt-6">

              <button onClick={() => { alert(`${car.name} added to cart`); navigate("/cart", {state: { car }});}}className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
                   Add To Cart
               </button>

              <button onClick={() => { alert(`Buying ${car.name}`);navigate("/cart", {  state: { car }});}}className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg w-full">
                Buy Now
               </button>

              <button onClick={() => navigate(-1)}className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg w-full">
                Back
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default CarDetails;