"use client"

import Modal from "./event-detailes/Modal"

function TableItem() {
  return (
    <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      
    <th scope="row" className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      عثمان صالح عبدالحميد
    </th>
    <td className="px-6 py-4">
      2343646479
    </td>
    <td className="px-6 py-4">
      34
    </td>
    <td className="px-6 py-4">
      $2999
    </td>
    <td className="px-6 py-4"><Modal/>
           </td>
  </tr>
  )
}

export default TableItem
