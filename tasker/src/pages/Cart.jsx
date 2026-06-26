import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Cart() {
  const navigate = useNavigate();
  const location = useLocation();
  const car = location.state?.car


if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>No Car Selected</h1>
      </div>
    );
  }


  const priceNumber = parseInt(car.price.replace(/[₹,]/g, ""));
  const subtotal = priceNumber;
  const tax = subtotal * 0.05;
  const insurance = 50000;
  const total = subtotal + tax;

  return (
   <div className="max-w-7xl mx-auto p-6">
  <h1 className="text-4xl font-bold mb-8">
    Shopping Cart
  </h1>

  <div className="grid lg:grid-cols-3 gap-8">

   
    <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">

  
      <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">

        <img
          src={car.image}
          alt={car.name}
          className="h-24 md:h-28 lg:h-32 xl:h-36 w-auto"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-semibold">
            {car.name}
          </h2>

          <div className="mt-2 text-sm text-gray-600 space-y-1">
  <p>
    <span className="font-semibold">Brand:</span> Honda
  </p>

  <p>
    <span className="font-semibold">Fuel Type:</span> Petrol
  </p>

  <p>
    <span className="font-semibold">Transmission:</span> Manual
  </p>

  <p>
    <span className="font-semibold">Description:</span> Stylish sedan with great mileage and modern features.
  </p>
</div>

        </div>

        <div>
          <p className="text-2xl font-bold">
            {car.price}
          </p>

         <button className="text-red-500 hover:underline hover:text-red-700">
            Remove Car
         </button>
        </div>

      </div>

    </div>

 
    <div className="bg-white rounded-xl shadow-lg p-6 h-fit">

      <h2 className="text-xl sm:text-2xl font-bold mb-4"> Order Summary</h2>
       <div className="flex justify-between mb-2 text-sm sm:text-base"> 
        <span>Subtotal</span> <span>₹{subtotal.toLocaleString()}</span>
         </div> 
         <div className="flex justify-between mb-2 text-sm sm:text-base">
            <span>Insurance</span>
          <span>₹{insurance.toLocaleString()}</span>
         </div>
         <div className="flex justify-between mb-2 text-sm sm:text-base">
           <span>Tax (5%)</span> <span>₹{tax.toLocaleString()}</span> 
           </div>
            <div className="flex justify-between text-lg sm:text-xl font-bold border-t pt-3 mt-3"> 
              <span>Total</span> <span>₹{total.toLocaleString()}</span>
               </div>

      {/* <div className="mt-6">
        <input
          type="text"
          placeholder="Coupon Code"
          className="w-full border p-3 rounded"
        />
      </div> */}
      <br/>

      <button onClick={() => alert("Order Placed Successfully!")} className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg"> Checkout </button>
    <br/>    <br/>
      <button onClick={() => navigate("/home")} className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg"> Continue Shopping </button>

    </div>

  </div>
</div>
  );
}

export default Cart;