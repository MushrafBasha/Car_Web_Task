import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import React, { useState } from "react";

import { db } from "../firebase";

function Admin() {
  const cars = [
    {
      id: 1,
      name: "BMW X5",
      price: "₹65,00,000",
      status: "Available",
    },
    {
      id: 2,
      name: "Audi A6",
      price: "₹55,00,000",
      status: "Sold",
    },
  ];

  const addCar = async () => {
    try {
      await addDoc(collection(db, "cars"), {
        name: "BMW X5",
        price: "6500000",
        brand: "BMW",
        fuel: "Diesel",
        transmission: "Automatic",
      });

      alert("Car Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const makeFeatured = async (id) => {
    await updateDoc(doc(db, "cars", id), {
      featured: true,
    });
  };

  const removeCar = async (id) => {
    await deleteDoc(doc(db, "cars", id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-4 rounded">
          <h3>Total Cars</h3>
          <p className="text-2xl font-bold">248</p>
        </div>

        <div className="bg-green-500 text-white p-4 rounded">
          <h3>Users</h3>
          <p className="text-2xl font-bold">1320</p>
        </div>

        <div className="bg-yellow-500 text-white p-4 rounded">
          <h3>Orders</h3>
          <p className="text-2xl font-bold">34</p>
        </div>

        <div className="bg-purple-500 text-white p-4 rounded">
          <h3>Revenue</h3>
          <p className="text-2xl font-bold">₹12.5 Lakh</p>
        </div>
      </div>

      {/* Add Car Button */}
      <button
        onClick={addCar}
        className="mb-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Car
      </button>

      {/* Car Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">
          Car Listings
        </h2>

        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Car</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td className="border p-2">{car.name}</td>
                <td className="border p-2">{car.price}</td>
                <td className="border p-2">{car.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;