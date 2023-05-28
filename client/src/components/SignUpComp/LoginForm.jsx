import React, { useState, useRef  } from 'react';
import { useTransition, animated } from 'react-spring';


const LoginForm = ({ handleCardSwitch}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup submission
        // ...
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Login form fields */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-black font-bold mb-2">
                Email
                </label>
                <input type="email" id="email" className="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm text-black font-bold mb-2">
                Password
                </label>
                <input type="password" id="password" className="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none" required/>
            </div>
            <div className="flex justify-between">
                <button type="submit" className="border-2 text-white px-4 py-2 rounded-lg hover:scale-105 focus:outline-none">
                Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;