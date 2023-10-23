'use client'

import { useEffect, useState } from "react"

function Vehicles({eventNo}) {

    const [vehicles,setVehicles]=useState([])
    useEffect( () => {
       const url= 'https://dull-plum-antelope-tutu.cyclic.cloud'
      fetch(`${url}/api/vechicles?event_no=${eventNo}`)
  .then(response => response.json())
  .then(data => setVehicles(data))

}, []);
    
 
  if (vehicles.length>0) {
    return  <table className=" w-50 border rounded">
    <thead>
      <tr>
        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100">رقم المركبة</th>
        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100">نوع المركبة</th>
        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100">مسار توقف المركة</th>
      </tr>
    </thead>
    <tbody>
        {vehicles?vehicles.map(e=>{
            return  <tr className="text-sm font-bold">
            <td className=" font-bold px-6 py-1 border-b border-gray-300"><button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  rounded-lg  px-4 py-3">{e.plate_no}</button>
    </td>
            <td className="px-6  border-b border-gray-300">{e.type} </td>
            <td className="px-6 border-b border-gray-300">مسار اول</td>
          </tr>
        })
        :null}
     
    </tbody>
  </table>
  }else{
    return <h3>لاتوجد مركبات لهذا الحدث</h3>
  }

  
}

export default Vehicles
