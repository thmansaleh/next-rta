"use client"

import { useState } from "react"
import VehiclesItem from "./VehiclesItem"

function Vehicles() {
    const [cars,setCars]=useState([
        [
            {
    
                plateNo:'',
                type:'',
                stop:'',
                source:''
            }
        ]
    ])
  return (
    <div className=" text-center flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="t3xt-center min-w-full text-left text-sm font-light">
            <thead className="font-medium border-b ">
              <tr className="text-center">
                <th scope="col" className="px-6 py-4">مصدر اللوحة </th>
                <th scope="col" className="px-6 py-4">رقم المركبة</th>
                <th scope="col" className=" py-4">نوع المركبة </th>
                <th scope="col" className="px-6 py-4">مسار توقف المركبة </th>
              </tr>
            </thead>
            <tbody className="text-center">

              {cars.map((e,i)=>{
                  return  <VehiclesItem
                   plateNo={e.plateNo}
                   stop={e.stop}
                   source={e.source}
                   type={e.type}
                   />
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <button className="w-full py-2 rounded bg-emerald-400 text-white">اضافة مركبة أخرى</button>
  </div>
  )
}

export default Vehicles
