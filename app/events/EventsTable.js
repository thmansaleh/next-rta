import TableItem from "./TableItem"

// "use client"
export default  function EventsTable({data}) {
// console.log(data)
  return (
    <div dir="rtl" className="relative overflow-x-auto shadow-md sm:rounded-lg text-center">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
        <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
        
            <th scope="col" className=" text-center px-6 py-3">
               اسم خبير السير
            </th>
            <th scope="col" className=" text-center px-6 py-3">
              رقم الحدث
            </th>
            <th scope="col" className="text-center px-6 py-3">
              رقم الدورية
            </th>
            <th scope="col" className="text-center px-6 py-3">
              التاريخ
            </th>
            <th scope="col" className="text-center px-6 py-3">
              
            </th>
         
          </tr>
        </thead>
        <tbody>
  
             {data.map(e=>{
                return <TableItem data={e}/>
             
             })}
        
        </tbody>
      </table>
    </div>)
}

