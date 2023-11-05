'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarAlt, faCar, faRoad, faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const AdminPanel = () => {

        const menuItems = [
          { name: "خبراء السير", icon: faUsers, link: "admin/users" },
          { name: "الأحداث", icon: faCalendarAlt, link: "/admin/events" },
          { name: "الدوريات", icon: faCar, link: "admin/cars" },
          { name: "الأجازات", icon: faCalendarTimes, link: "#off-days" }
        ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100" dir="rtl">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {menuItems.map((item, index) => (
          <Link
          
            href={item.link}
            key={index}
            className="flex flex-col items-center justify-center h-32 w-32 text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out"
            aria-label={item.name}
          >
            <FontAwesomeIcon icon={item.icon} size="3x" className="text-blue-500 mb-2" />
            <h3 className="text-lg font-medium">{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
