import UsersTable from "./UsersTable"
export const metadata= {
  title: 'users',
  description: 'othman saleh',
  viewport: 'width=650',
}
 async function page() {
  const res= await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/users',{
    next:{revalidate:0}
  })
  if (!res.status=='200') return null
const data = await res.json()

  if (data[0].name) {
    return <div dir="rtl" >
    <UsersTable users={data}/>
   </div>
  }else{
    return <h1>no users</h1>
  }
}

export default page
