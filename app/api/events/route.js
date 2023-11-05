import deleteEvent from "@/app/libs/deleteEvent"

export async  function GET() {
const token = localStorage.getItem('token')

        const res = await fetch(`https://dull-plum-antelope-tutu.cyclic.cloud/api/events`,
    {
method: 'GET',
headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    }
    )
const data =await res.json()
    return Response.json( data)
  }


  
export async function DELETE(id) {
    
   const dataa = await deleteEvent(id)

return Response.json(id )

  }
