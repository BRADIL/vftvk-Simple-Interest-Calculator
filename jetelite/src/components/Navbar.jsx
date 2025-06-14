import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black bg-opacity-80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-lg font-bold text-gold">JetElite</NavLink>
        <div className="space-x-4 hidden md:block">
          <NavLink to="/fleet" className="hover:text-gold">Fleet</NavLink>
          <NavLink to="/booking" className="hover:text-gold">Book</NavLink>
          <NavLink to="/addons" className="hover:text-gold">Services</NavLink>
          <NavLink to="/about" className="hover:text-gold">About</NavLink>
          <NavLink to="/support" className="hover:text-gold">Support</NavLink>
          <NavLink to="/blog" className="hover:text-gold">Blog</NavLink>
          <NavLink to="/dashboard" className="hover:text-gold">Dashboard</NavLink>
        </div>
        <div className="space-x-2">
          <NavLink to="/login" className="px-3 py-1 border border-gold rounded hover:bg-gold hover:text-black">Login</NavLink>
          <NavLink to="/signup" className="px-3 py-1 bg-gold text-black rounded hover:bg-white">Sign Up</NavLink>
        </div>
      </div>
    </nav>
  );
}
