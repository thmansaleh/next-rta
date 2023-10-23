import Modal from "./event-detailes/Modal";
import EventsTable from "./EventsTable";

export default async function Events() {

  const url= true?process.env.URL:'http://localhost:3000'
const res = await fetch(`${url}/api/events` ,{
  next: { revalidate: 0 }, // Revalidate every 60 seconds
}
)
  const data = await res.json()


  return (
    <EventsTable data={data}/>
   )
}

