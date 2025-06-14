import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-center py-6 border-t border-gray-800">
      <div className="space-x-4 mb-2">
        <NavLink to="/terms" className="hover:text-gold">Terms</NavLink>
        <NavLink to="/privacy" className="hover:text-gold">Privacy</NavLink>
      </div>
      <div className="space-x-4">
        <a href="#" className="hover:text-gold">Twitter</a>
        <a href="#" className="hover:text-gold">Instagram</a>
        <a href="#" className="hover:text-gold">Facebook</a>
      </div>
      <p className="mt-2 text-sm text-gray-500">&copy; 2023 JetElite</p>
    </footer>
  );
}
