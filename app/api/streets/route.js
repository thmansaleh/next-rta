export async function GET() {
    const res = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/api/streets',
    {
        next:{revalidate:3600}
    }
    )
    const data = await res.json()
   
    return Response.json( data )
  }