'use client'

import { useDispatch,useSelector } from "react-redux";

function SaveButton() {
    const  event = useSelector((state) => state.eventValuse);
    const  markabat = useSelector((state) => state.markabat);
    const dispatch=useDispatch()
  const save =async ()=>{
    const response = await fetch('/api/new-event', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event,
            markabat
        })
    });
    
    const data = await response.json()
    console.log(data)
  }

  return (
    <button onClick={save} className="w-full py-2 rounded bg-green-500 mt-5 text-white">حفظ</button>
  )
}

export default SaveButton
