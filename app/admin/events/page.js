import EventsTable from "./EventsTable";
export const metadata= {
  title: 'events',
  description: 'othman saleh',
  viewport: 'width=650',
}
export default async function Events() {

  const url= 'https://dull-plum-antelope-tutu.cyclic.cloud'
const res = await fetch(`${url}/api/events`,{
  next: { revalidate: 1 }
}
)
  const data = await res.json()


  return (
    <EventsTable data={data}/>
   )
}

