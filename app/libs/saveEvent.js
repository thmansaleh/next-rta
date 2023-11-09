
export const saveEvent= async (event,markabat)=> {

    const response = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/api/add-event', {
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
    // console.log(data)
    return data
}


