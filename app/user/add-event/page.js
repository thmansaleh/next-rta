import FristSecton from "./FristSecton"
import SecondSection from "./SecondSection"
import Times from "./Times"
import Vehicles from "./Vehicles"

export const metadata = {
  title: '...',
  description: '...',
  viewport: 'width=600',
}
async function page() {
  const production=false
  const url =production?'http://localhost:3000':'https://dull-plum-antelope-tutu.cyclic.cloud'
  const res = await fetch(`${url}/api/cars`, { next:{revalidate:3600} })
  const cars = await res.json()
  const res2 = await fetch(`${url}/api/sources`, { next:{revalidate:3600} })
  const sources = await res2.json()

  return (
    <div dir='rtl' className="px-4 py-4">
     <FristSecton cars={cars}/>
      <SecondSection sources={sources}/>
      <Times />
      <Vehicles />

    </div>

  )
}

export default page
