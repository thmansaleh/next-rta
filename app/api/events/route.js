import deleteEvent from "@/app/libs/deleteEvent"
import events from "@/app/libs/events"

export async function GET() {

}


  
export async function DELETE(id) {
    
   const dataa = await deleteEvent(id)

return Response.json(id )

  }
