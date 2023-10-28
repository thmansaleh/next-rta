'use client'
import { saveEvent } from "@/app/libs/saveEvent";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";


export default function SaveModal() {
    const  event = useSelector((state) => state.eventValuse);
const  markabat = useSelector((state) => state.markabat);
    
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoding] = useState(false);
  const message = useRef()
  const save = async () =>{
    message.current.textContent='جاري ارسال الحدث'
   
    const data =await saveEvent(event,markabat)
    data? message.current.textContent='تم الارسال بنجاح ':message.current.textContent='فشل الارسال '
    

}
  return (
    <>
      <button
        className="w-full py-2 rounded bg-green-500 mt-5 text-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        حفظ
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-80 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 ">
                  <h3 className="text-lg font-semibold">
                   هل تريد  حفظ الحدث
                  </h3>
                
                </div>

   <p className='text-center' ref={message}></p>
                <div className="flex items-center justify-around p-6">
                  <button
                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    اغلاق
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none m-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={save}
                  >
                    حفظ 
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