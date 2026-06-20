import React, { useState } from "react";
import { useAsyncValue, useLocation, useNavigate } from "react-router-dom";

const AddtoCart = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const productName = location.state?.name;
    const productPrice = location.state?.price;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    // Example product price
    /*  const productPrice = 650; */

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("🎉 Order Placed Successfully!");
        navigate("/");

        
    };

    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Checkout
                </h1>

                {/* Product Summary */}
                <div className="bg-gray-50 p-4 rounded-xl mb-6">

                    <h2 className="text-xl font-semibold">
                        {productName}
                    </h2>

                    <h2 className="text-xl font-semibold">
                        Product Price
                    </h2>
                    <p className="text-2xl font-bold text-green-600 mt-2">
                        ₹{productPrice}
                    </p>
                </div>

                {/* Customer Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Customer Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-cyan-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-cyan-500"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-cyan-500"
                    />

                    <textarea
                        name="address"
                        placeholder="Delivery Address"
                        rows="4"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-cyan-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-cyan-500 text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
                    >
                        Confirm Order
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddtoCart;