// 'use client';
// import { useEffect, useState } from "react"
// import Modal from "./event-detailes/Modal"

import DeleteModal from "./event-detailes/DeleteModal"
import Modal from "./event-detailes/Modal"

function TableItem({data}) {
 
 
  return (<tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
      
    <th scope="row" className="  py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {data.name}
    </th>
    <td className=" ">
      {data.event_no}
    </td>
    <td className=" py-2">
      {data.car_code}
    </td>
    <td className=" py-2">
      {data.date}
    </td>
    <td className=" py-2">
      <Modal data={data}/>
      <DeleteModal id={data}/>
           </td>
  </tr>

  )
}

export default TableItem
