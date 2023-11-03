'use client'

import { updateEventValuse } from "@/app/store/features/eventValuse";
import { useDispatch ,useSelector} from "react-redux";

 function StreetDescription({streets}) {
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
                <th scope="col" className="px-6 py-4">موقع الحدث</th>
                <th scope="col" className="px-6 py-4">عدد المسارات المغلقة</th>
              
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
              <td className="whitespace-nowrap  py-4 px-6 font-medium flex justify-around">
            
              <select 
                     onChange={(e)=>dispatch(updateEventValuse({name:'streetId',value:e.target.value}))}

                  id="countries" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
                    {streets.map(e=>{
                        return <option
                         value={e.id}
                         >
                        {e.name}
                         </option>
                    })}
              
               
                  </select>
                  <input 
                  onChange={(e)=>dispatch(updateEventValuse({name:'locationDescription',value:e.target.value}))}
                  value={data.locationDescription}
                  placeholder="الوصف"
                  type="text" className="mx-1 text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />

                  
                </td>
                <td className="whitespace-nowrap  py-4 px-6 font-medium">
                <input 
                  onChange={(e)=>dispatch(updateEventValuse({name:'closedPaths',value:e.target.value}))}
                  value={data.closedPaths}
                  type="number" className="text-center w-20 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />

                </td>
           
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <input 
                  onChange={(e)=>dispatch(updateEventValuse({name:'helper',value:e.target.value}))}
                  value={data.helper}
                  type="text" 
                  placeholder="خدمات مساندة"
                  className="my-2 text-center w-40 border border-gray-600 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
    <input 
                  onChange={(e)=>dispatch(updateEventValuse({name:'note',value:e.target.value}))}
                  value={data.note}
                  type="text" 
                  placeholder="الملاحظات"
                  className="w-full  text-center w-20 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />

  </div>
  )
}

export default StreetDescription
