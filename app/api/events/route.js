import deleteEvent from "@/app/libs/deleteEvent"

export async function GET() {

    const res = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/events',
{ 
next: { revalidate: 1}
}
    )
    const data = await res.json()
   
    return Response.json( "othman")
  }


  
export async function DELETE(id) {
    
   const dataa = await deleteEvent(id)

return Response.json(id )

  }
