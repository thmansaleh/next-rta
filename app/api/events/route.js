import deleteEvent from "@/app/libs/deleteEvent"

export  function GET() {
const token = localStorage.getItem('token')

        fetch('https://dull-plum-antelope-tutu.cyclic.cloud/events', {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
return Response.json( data)
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

    
  }


  
export async function DELETE(id) {
    
   const dataa = await deleteEvent(id)

return Response.json(id )

  }
