import React from 'react';

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 text-black" />
        <input type="password" placeholder="Password" className="w-full p-2 text-black" />
        <button className="w-full px-4 py-2 bg-gold text-black rounded">Login</button>
      </form>
    </div>
  );
}
