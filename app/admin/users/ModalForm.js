export default function ModalForm(){

return <form action className="text-right p-3">
  <div>
    <label className="block" htmlFor="email">الأسم</label>
    <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
  </div>
  <div className="mt-4">
    <label className="block">اسم المستخدم</label>
    <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
  </div>
  <div className="mt-4">
    <label className="block">كلمة المرور</label>
    <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
  </div>
  <div className="mt-4">
    <label className="block">رقم الهاتف</label>
    <input type="number" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
  </div>
  <div className="mt-4 text-right">
    <label className="block">الوظيفة</label>
    <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-right">
      <option value="option1">خبير سير </option>
      <option value="option2">Option 2</option>
      <option value="option3">سائق كرين</option>
      {/* Add more options as needed */}
    </select>
  </div>
  <div className="mt-4">
    <label className="block">فترة العمل</label>
    <select className=" text-right  w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
      <option value="option1">الصباحية</option>
      <option value="option2">المسائية</option>
      <option value="option3">الليلية</option>
      {/* Add more options as needed */}
    </select>
  </div>
  {/* <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button> */}
</form>
}