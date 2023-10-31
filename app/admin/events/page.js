import EventsTable from "./EventsTable";
export const metadata= {
  title: 'events',
  description: 'othman saleh',
  viewport: 'width=650',
}
export default async function Events() {

  const production=false
  const url =production?'http://localhost:3000':'https://next-eight-xi.vercel.app'
const res = await fetch(`${url}/api/events`,{
  next: { revalidate: 0}
}
)
  const data = await res.json()


  return (
    <EventsTable data={data}/>
   )
}

