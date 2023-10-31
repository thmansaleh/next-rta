'use client'
import React from "react";
import TableItem from "../TableItem";
import TableOfTime from "./TableOfTime";
import Vehicles from "./Vehicles";

export default function Modal({data}) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-green-900"        type="button"
        onClick={() => setShowModal(true)}
      >
        عرض
      </button>
      
      {showModal ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            
              
              <div className="text-black border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <h3 dir='ltr' className="text-1xl  font-semibold text-center py-3">
                   {data.event_no}: تفاصيل الحدث
                  </h3>
                  <h5 className="text-black">{data.name}</h5>
             
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <TableOfTime data={data}/>
             <Vehicles eventNo={data.event_no}/>
                  
                </div>
             
                <div className="flex items-center justify-end p-6   rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    اغلاق
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    حفظ الحدث 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}