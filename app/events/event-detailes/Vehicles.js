'use client'

import { useEffect, useState } from "react"

function Vehicles({eventNo}) {

    const [vehicles,setVehicles]=useState([])
    useEffect( () => {
       
        fetch(`https://dull-plum-antelope-tutu.cyclic.cloud/api/vehicles?event_no=${eventNo}`)
  .then(response => response.json())
  .then(data => setVehicles(data))


    }, []);
    console.log(vehicles)
    
 
  if (vehicles.length>0) {
    return  <table class=" w-50 border rounded">
    <thead>
      <tr>
        <th class="px-6 py-3 border-b-2 border-gray-300 bg-gray-100">رقم المركبة</th>
        <th class="px-6 py-3 border-b-2 border-gray-300 bg-gray-100">نوع المركبة</th>
        <th class="px-6 py-3 border-b-2 border-gray-300 bg-gray-100">مسار توقف المركة</th>
      </tr>
    </thead>
    <tbody>
        {vehicles? vehicles.map(e=>{
            return  <tr className="text-sm font-bold">
            <td class=" font-bold px-6 py-1 border-b border-gray-300"><button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  rounded-lg  px-4 py-3">{e.plate_no}</button>
    </td>
            <td class="px-6  border-b border-gray-300">{e.type} </td>
            <td class="px-6 border-b border-gray-300">مسار اول</td>
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
