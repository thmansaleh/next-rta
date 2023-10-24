"use client"
import { useSelector ,useDispatch} from 'react-redux';

import VehiclesItem from "./VehiclesItem"
import { addMarkabat } from '@/app/store/features/markabatSlice';
import { useState } from 'react';

function Vehicles() {
 
  const  Vehicles = useSelector((state) => state.markabat.markabat);
  const dispatch=useDispatch()
  // console.log(Vehicles)
  
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

              {Vehicles.map((e,i)=>{
                  return  <VehiclesItem
                   id={i}
                   />
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <button onClick={()=>dispatch(addMarkabat())} className="w-full py-2 rounded bg-emerald-400 text-white">اضافة مركبة أخرى</button>
  </div>
  )
}

export default Vehicles
