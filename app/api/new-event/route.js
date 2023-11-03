
export async function POST(req) {
    
    const event = await req.json()
    const response = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/api/add-event', {
    // const response = await fetch('http://localhost:3001/api/add-event', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            event
        )
    });
    
    const data = await response.json()
    return Response.json( data)
    
  }
