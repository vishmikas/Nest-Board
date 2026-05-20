import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/home/Home"
import { PropertyDetails } from "./pages/property/PropertyDetails"
import { Map } from "./pages/map/Map"
import { Navbar, type NavbarLink } from "./components/common/Navbar"

const navLinks: NavbarLink[] = [
  { label: "Explore", to: "/" },
  // { label: "Property Details", to: "/property-details" },
  { label: "Map View", to: "/map" },
]

export function App() {
  return (
    <BrowserRouter>
      {/* Navigation Links */}
      <Navbar links={navLinks} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App