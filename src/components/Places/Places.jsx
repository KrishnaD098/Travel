import React from 'react';
import PlaceCard from './PlaceCard';
import Img1 from "../../assets/places/boat.jpg"
import Img2 from "../../assets/places/tajmahal.jpg"
import Img3 from "../../assets/places/water.jpg"
import Img4 from "../../assets/places/place4.jpg"
import Img5 from "../../assets/places/place5.jpg"
import Img6 from "../../assets/places/place6.jpg"


const PlacesData = [
  {
    img: Img1,
    title: "Kashmir",
    location: "India",
    description: "Majestic mountains, serene lakes, and vibrant cultural heritage",
    price: 6700,
    type: "Price",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:" Timeless symbol of love, intricate marble architecture, UNESCO World Heritage",
    price: 6700,
    type: "Price",
  },
  {
    img: Img3,
    title: "Maldives",
    location: "Maldives",
    description:
      "Pristine beaches, crystal-clear waters, and luxurious overwater bungalows",
    price: 6200,
    type: "Price",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "Iconic landmarks, bustling harbor, and vibrant multicultural atmosphere",
    price: 6700,
    type: "Price",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      " Entertainment capital, celebrity sightings, and diverse neighborhoods",
    price: 6700,
    type: "Price",
  },
  {
    img: Img6,
    title: "Las Vegas",
    location: "California",
    description:
      "Glittering nightlife, extravagant casinos, and desert oasis entertainment",
    price: 6200,
    type: "Price",
  },
];
const Places = ({handleOrderPopUp}) => {
  return (
    <div className="bg-transparent dark:bg-transparent text-black dark:text-black py-10">
      <section data-aos="fade-up" className="container">
        <div className='font-extrabold '>
          <h1>Best Places To Visit</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item,index) => (
              <PlaceCard
                handleOrderProps={handleOrderPopUp}
                key={index}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Places;