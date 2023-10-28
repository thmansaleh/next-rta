export async function GET(req) {
    const {searchParams} = new URL(req.url);
    const eventNo = searchParams.get("event_no")

    const res = await fetch(`https://dull-plum-antelope-tutu.cyclic.cloud/api/markabat?event=${eventNo}`,
    {
        next:{revalidate:0}
    }
    )
    const data = await res.json()
   
    return Response.json( data )
  }