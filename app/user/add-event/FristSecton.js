'use client'

import { updateEventValuse } from "@/app/store/features/eventValuse";
import { useDispatch ,useSelector} from "react-redux";

 function FristSecton({cars}) {
  const  data = useSelector((state) => state.eventValuse);
  const dispatch=useDispatch()
  
  return (
    <div className=" text-center flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="t3xt-center min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium ">
              <tr className="text-center">
                <th scope="col" className="px-6 py-4">فترة العمل</th>
                <th scope="col" className="px-6 py-4">رقم الدورية</th>
              
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
              <td className="whitespace-nowrap  py-4 px-6 font-medium">
                  <select 
                     onChange={(e)=>dispatch(updateEventValuse({name:'shift',value:e.target.value}))}

                  id="countries" className="w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                 
                    <option value="صباحية">صباحية</option>
                    <option value="مسائية">مسائية</option>
                    <option value="ليلية">ليلية</option>
                 
               
                  </select>
                </td>
                <td className="whitespace-nowrap  py-4 px-6 font-medium">
                  <select 
                     onChange={(e)=>dispatch(updateEventValuse({name:'carId',value:e.target.value}))}
                  id="countries" className="w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    {cars.map(e=>{
                        return <option
                         value={e.id}
                         >
                            {e.car_code } {''}{e.centralization}
                          
                         </option>
                    })}
              
               
                  </select>
                </td>
           
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FristSecton
