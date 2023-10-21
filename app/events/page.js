import Modal from "./event-detailes/Modal";
import EventsTable from "./EventsTable";

export default async function Events() {

//   });
const res = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/api/events', { next: { revalidate: 2 } })
  const data = await res.json()


  return (
    <EventsTable data={data}/>
   )
}

