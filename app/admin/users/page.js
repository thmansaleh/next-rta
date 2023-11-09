import UsersTable from "./UsersTable"

function page() {
    const users =[
        {
            name:'othman',
            username:'fhdjk',
            phone:'05050505050'

        },
        {
            name:'ali',
            username:'fhdjk',
            phone:'05050505050'

        },
    ]
  return (
    <div dir="rtl" >
      <UsersTable users={users}/>
    </div>
  )
}

export default page
