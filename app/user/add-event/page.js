import FristSection from "./FristSection"
import Times from "./Times"
import Vehicles from "./Vehicles"

export const metadata = {
  title: '...',
  description: '...',
  viewport: 'width=600',
}
function page() {
  return (
    <div dir='rtl' className="px-4 py-4">
      <FristSection />
      <Times />
      <Vehicles />

    </div>

  )
}

export default page
