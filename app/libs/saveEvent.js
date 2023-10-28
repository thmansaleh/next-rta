
export const saveEvent= async (event,markabat)=> {

    const response = await fetch('/api/new-event', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event,
            markabat
        })
    });
    
    const data = await response.json()
    console.log(data)
    return data
}


