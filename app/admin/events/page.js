import EventsTable from "./EventsTable";
export const metadata= {
  title: 'events',
  description: 'othman saleh',
  viewport: 'width=650',
}
export default async function Events() {

  const production=false
  // const url =production?'http://localhost:3000':'https://next-eight-xi.vercel.app'
const url = "https://dull-plum-antelope-tutu.cyclic.cloud/events"
const res = await fetch(url,{
  next: { revalidate: 0}
}
)
  const data = await res.json()


    if (data.length>0) {
      return <div>
        <h2 className="text-center text-md text-gray-600 my-2">الاحداث التي لم يتم تسليمها</h2>
        <EventsTable data={data}/>
        </div>
    }else{
      return <h2 className="text-center text-2xl text-gray-600 mt-5">لاتوجد احداث</h2>
    }
   
}

