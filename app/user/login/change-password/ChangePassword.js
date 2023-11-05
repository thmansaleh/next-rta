'use client'

import { useState } from "react";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement your password change logic here
      if (formData.newPassword === formData.confirmNewPassword) {
        console.log('Passwords match. Proceed with the password change.');
      } else {
        console.log('Passwords do not match.');
      }
    };
  
    return (
      <div dir="rtl" lang="ar" className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">تغيير كلمة السر</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-gray-900">
                كلمة السر القديمة
              </label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                onChange={handleChange}
                value={formData.oldPassword}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900">
                كلمة السر الجديدة
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                onChange={handleChange}
                value={formData.newPassword}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmNewPassword" className="block mb-2 text-sm font-medium text-gray-900">
                تأكيد كلمة السر الجديدة
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                onChange={handleChange}
                value={formData.confirmNewPassword}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              تحديث كلمة السر
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ChangePassword;