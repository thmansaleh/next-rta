export async function GET() {
    const res = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/api/sources',
    {
        next:{revalidate:1}
    }
    )
    const data = await res.json()
   
    return Response.json( data )
  }