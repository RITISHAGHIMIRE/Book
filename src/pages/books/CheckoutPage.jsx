import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        state: '',
        zipcode: '',
        agreeTerms: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0).toFixed(2);
    const itemsCount = cartItems.length;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Basic validation
        if (itemsCount === 0) {
            alert('Your cart is empty!');
            setIsSubmitting(false);
            return;
        }

        if (!formData.agreeTerms) {
            alert('Please agree to the terms and conditions');
            setIsSubmitting(false);
            return;
        }

        // Process the order (you would typically send this to your backend)
        console.log('Order submitted:', {
            ...formData,
            cartItems,
            totalPrice
        });

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Order placed successfully!');
            // Here you would typically:
            // 1. Clear the cart
            // 2. Redirect to order confirmation page
        }, 1000);
    };

    return (
        <section>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <div>
                            <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delivery</h2>
                            <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
                            <p className="text-gray-500 mb-6">Items: {itemsCount}</p>
                        </div>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <form onSubmit={handleSubmit} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Personal Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                required
                                            />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                required
                                                placeholder="email@domain.com"
                                            />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                required
                                                placeholder="+123 456 7890"
                                            />
                                        </div>

                                        <div className="md:col-span-3">
                                            <label htmlFor="address">Address / Street</label>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                required
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="city">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                required
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="country">Country / region</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input
                                                    type="text"
                                                    name="country"
                                                    id="country"
                                                    value={formData.country}
                                                    onChange={handleChange}
                                                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="state">State / province</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input
                                                    type="text"
                                                    name="state"
                                                    id="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="md:col-span-1">
                                            <label htmlFor="zipcode">Zipcode</label>
                                            <input
                                                type="text"
                                                name="zipcode"
                                                id="zipcode"
                                                value={formData.zipcode}
                                                onChange={handleChange}
                                                className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                required
                                            />
                                        </div>

                                        <div className="md:col-span-5 mt-3">
                                            <div className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="agreeTerms"
                                                    id="agreeTerms"
                                                    checked={formData.agreeTerms}
                                                    onChange={handleChange}
                                                    className="form-checkbox"
                                                    required
                                                />
                                                <label htmlFor="agreeTerms" className="ml-2">
                                                    I agree to the <Link to="/terms" className="underline underline-offset-2 text-blue-600">Terms & Conditions</Link> and <Link to="/policy" className="underline underline-offset-2 text-blue-600">Shopping Policy.</Link>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">
                                                <button
                                                    type="submit"
                                                    disabled={!formData.agreeTerms || itemsCount === 0 || isSubmitting}
                                                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                                                        !formData.agreeTerms || itemsCount === 0 ? 'opacity-50 cursor-not-allowed' : ''
                                                    }`}
                                                >
                                                    {isSubmitting ? 'Processing...' : 'Place an Order'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;