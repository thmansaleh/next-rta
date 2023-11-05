'use client'
import { useState } from 'react';
import Link from 'next/link'
const LoginForm = () => {
  
const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/api/user-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (response.status === 200) {
                localStorage.setItem('token', data.token); // Storing the token
                alert('Login successful!');
            } else {
                alert('Login failed!');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };
    return (
        <div dir="rtl" className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  اسم المستخدم 
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                  id="email"
                  className="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  كلمة السر
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  id="password"
                  className="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <Link href="#" change-password" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  هل نسيت كلمة السر؟
                </Link>
              </div>
              
              <button
                type="submit"
                className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
              >
                تسجيل الدخول
              </button>
            </form>
          </div>
        </div>
      );






};

export default LoginForm;
