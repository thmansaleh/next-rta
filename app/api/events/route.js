import deleteEvent from "@/app/libs/deleteEvent"

export async function GET() {
    const res = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/events',
    {
        next:{revalidate:0}
    }
    )
    const data = await res.json()
   
    return Response.json( data )
  }


  
export async function DELETE(id) {
    const id = await req.json()
   const dataa = await deleteEvent(id)

return Response.json(id )

  }
