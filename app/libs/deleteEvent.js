
export default async function deleteEvent(id){
console.log(id)
    const response = await fetch(`https://dull-plum-antelope-tutu.cyclic.cloud/events/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    
    const data = await response.json()
    console.log(data)
return true
  
}


