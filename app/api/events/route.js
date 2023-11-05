import deleteEvent from "@/app/libs/deleteEvent"

export  function GET() {

    
    return Response.json( "othman")
  }


  
export async function DELETE(id) {
    
   const dataa = await deleteEvent(id)

return Response.json(id )

  }
