
function TableOfTime({data}) {
  return (
    <div className="relative overflow-x-auto">
    <table className=" text-center w-full text-sm text-left text-gray-900 dark:text-gray-400">
      <thead className="text-xs text-white uppercase bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
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
            عدد المساارت المغلقة 
          </th>
          <th scope="col" className="px-6 py-3">
            خدمات مساندة 
          </th>
          <th scope="col" className="px-6 py-3">
           موقع الحدث
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-slate-800 text-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="py-2">
            {data.type}
          </td>
          <td className=" py-2">
            {data.source}
          </td>
          <td className=" py-2">
            {data.start}
          </td>
          <td className=" py-2">
            {data.arrive}
          </td>
          <td className=" py-2">
            {data.finsh}
          </td>
          <td className=" py-2 ">
            {data.closed_paths}
          </td>
          <td className=" py-2 ">
            {data.helper}
          </td>
          <td className=" py-2">
            {data.street}
            -
            {data.description}
          </td>
        </tr>
        
      </tbody>
    </table>

    <h1 className="text-md text-right w-100 border-2 my-1 border-violet-300 rounded py-2 px-1 ">
     {/* {data.note.length>1&& `الملاحظات: ${data.note}`}
     {data.note.length<1& 'لاتوجد ملاحظات'} */}
     {data.note.length>0?`الملاحظات: ${data.note}`:'لاتوجد ملاحظات'}
    </h1>
  </div>

  )
}

export default TableOfTime
