import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/helper/supabaseClient';

const LoginForm = ({ handleCardSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert('Error with Login:' + error.message);
    } else {
      // once login is successful, redirect to dashboard
      nav("/Leads");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Login form fields */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm text-black font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm text-black font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="border-2 text-white px-4 py-2 rounded-lg hover:scale-105 focus:outline-none"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
