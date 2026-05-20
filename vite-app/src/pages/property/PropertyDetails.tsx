import { useParams } from "react-router"
import { propertyDetails } from "@/data/propertyDetails"
import { PropertySection } from "./components/PropertySection"
import { PropertyInfo } from "./components/PropertyInfo"
import { RoomList } from "./components/RoomList"

export function PropertyDetails() {
  const { id } = useParams<{ id: string }>()
  const property = propertyDetails.find((p) => p.id === id)

  if (!property) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-2">
        <p className="text-xl font-semibold text-gray-700">
          Property not found
        </p>
        <p className="text-sm text-gray-400">No property matches id: {id}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PropertySection image={property.image} rating={property.rating} />

      <div className="px-4 pb-12">
        <div className="relative z-10 -mt-12">
          <PropertyInfo
            title={property.title}
            address={property.address}
            amenities={property.amenities}
            seatsAvailable={property.seatsAvailable}
            minStay={property.minStay}
            startingPrice={property.startingPrice}
          />
        </div>

        <div className="mt-5">
          <RoomList rooms={property.rooms} />
        </div>
      </div>
    </div>
  )
}