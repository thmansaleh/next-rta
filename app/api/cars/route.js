export async function GET() {
    const res = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/api/cars',{
        next:{revalidate:2}
    }
     
    )
    const data = await res.json()
   
    return Response.json( data )
  }