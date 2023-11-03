export async function GET(req) {
    const {searchParams} = new URL(req.url);
    const eventId = searchParams.get("event_id")

    const res = await fetch(`https://dull-plum-antelope-tutu.cyclic.cloud/api/vehicles/${eventId}`,
    {
        next:{revalidate:0}
    }
    )
    const data = await res.json()
   
    return Response.json( data )
  }