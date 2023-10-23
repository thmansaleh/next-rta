export async function GET() {
    const res = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/api/events', {

        next: { revalidate: 10 },
        headers: {
            'Content-Type': 'application/json',
        },

    })
    const data = await res.json()

    return Response.json(data )
}