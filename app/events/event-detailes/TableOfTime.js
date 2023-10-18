
function TableOfTime() {
  return (
    <div className="relative overflow-x-auto">
    <table className=" text-center w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            نوع البلاغ 
          </th>
          <th scope="col" className="px-6 py-3">
            مصدر البلاغ
          </th>
          <th scope="col" className="px-6 py-3">
            وقت الاستلام
          </th>
          <th scope="col" className="px-6 py-3">
            وقت الوصول
          </th>
          <th scope="col" className="px-6 py-3">
            وقت الانتهاء
          </th>
          <th scope="col" className="px-6 py-3">
            اسم الشارع
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="px-6 py-4">
            حادث
          </td>
          <td className="px-6 py-4">
            العمليات
          </td>
          <td className="px-6 py-4">
            16:22
          </td>
          <td className="px-6 py-4">
            16:30
          </td>
          <td className="px-6 py-4">
            16:50
          </td>
          <td className="px-6 py-4">
            شارع الشيخ راشد بعد دبي مول
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  )
}

export default TableOfTime
