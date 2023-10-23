export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const eventNo = searchParams.get('event_no')
    const res = await fetch(`https://dull-plum-antelope-tutu.cyclic.cloud/api/vehicles?event_no=${eventNo}`, {

        next: { revalidate: 1 },
        headers: {
            'Content-Type': 'application/json',
        },

    })
    const data = await res.json()
    return Response.json(data )
}