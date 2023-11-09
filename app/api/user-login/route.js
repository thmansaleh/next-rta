import { cookies } from 'next/headers'

export async function POST(req) {
    const cookie = cookies()

    const user = await req.json()

    const res = await fetch('http://localhost:3001/api/user-login',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
           user
        )
    }
    )
    console.log(res.status)
    const data = await res.json()
    if (res.status=='200') {
cookie.set('token',data.token)

    // return Response.json( data )
   }
    return Response.json({
        status:401
    })
  }