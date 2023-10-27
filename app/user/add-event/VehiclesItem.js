"use client"
import {useDispatch,useSelector} from 'react-redux';
import { updateMarkabat } from '@/app/store/features/markabatSlice';
import { useEffect } from 'react';

function VehiclesItem({id}) {
  const  markabat = useSelector((state) => state.markabat);
  const dispatch=useDispatch()
  return (
    <tr className="text-center">
                <td className="whitespace-nowrap  py-4 font-medium">
                  <select 
                  // onChange={(this)=>dispatch(updateMarkabat({id:id,name:'source',value:'uy'}))}
                  onChange={(e)=>dispatch(updateMarkabat({id:id,name:'source',value:e.target.value}))}
                   id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option value={markabat[id].source} selected>{markabat[id].source}</option>
                    <option value="ابوظبي">ابوظبي</option>
                    <option value="الشارقة">الشارقة</option>
                    <option value="دبي">دبي</option>
                    <option value="عجمان">عجمان</option>
                    <option value="ام القوين">ام القوين</option>
                 
                  </select>
                </td>
                <td className="whitespace-nowrap py-4 font-medium">
                  <input 
                  onChange={(e)=>dispatch(updateMarkabat({id:id,name:'plateNo',value:e.target.value}))}

                  dir="ltr" value={markabat[id].plateNo} type="text" className="w-100 text-center w-20 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
                </td>
                <td className="whitespace-nowrap  py-4 px-6 font-medium">
                  <select 
                     onChange={(e)=>dispatch(updateMarkabat({id:id,name:'type',value:e.target.value}))}

                  id="countries" className="w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option value={markabat[id].type} selected>{markabat[id].type}</option>
                    <option value="صالون">صالون</option>
                    <option value="شاحنة">شاحنة</option>
                    <option value="بيكب">بيكب</option>
                    <option value="دراجة">دراجة</option>
               
                  </select>
                </td>
                <td className="whitespace-nowrap  py-4 px-6 font-medium">
                <input
               onChange={(e)=>dispatch(updateMarkabat({id:id,name:'stop',value:e.target.value}))}

                 dir="ltr" value={markabat[id].stop} type="text" className="w-100 text-center w-20 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />

                </td>
              </tr>
  )
}

export default VehiclesItem
