import React from 'react';

const UserProfile = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-right mb-4">معلومات المستخدم</h1>
            
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-right" htmlFor="name">
                        الاسم
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="الاسم"/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-right" htmlFor="username">
                        اسم المستخدم
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="اسم المستخدم"/>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-right" htmlFor="phone">
                        الهاتف
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="الهاتف"/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-right" htmlFor="day-off">
                        يوم الراحة
                    </label>
                    <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="day-off">
                        <option value="sunday">الفترة الاولى</option>
                        <option  value="sunday">الفترة الثانية</option>
                        <option value="sunday">الفترة الثالثة</option>
                    </select>
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        تغيير كلمة المرور
                    </button>
                </div>

             
            </div>
        </div>
    );
}

export default UserProfile;
