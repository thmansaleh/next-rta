import Modal from "./event-detailes/Modal";
import EventsTable from "./EventsTable";

export default async function Events() {

   const url= 'https://dull-plum-antelope-tutu.cyclic.cloud'
const res = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/api/events' ,{
  next: { revalidate: 1 }, // Revalidate every 60 seconds
}
)
  const data = await res.json()


  return (
    <EventsTable data={data}/>
   )
}

