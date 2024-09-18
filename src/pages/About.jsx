import React from 'react'
import Location from "../components/Location/Location"

const About = () => {
  return (
    <div className='container pt-14'>
      <div className='py-10'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
        About Us!
        </h1>
        <p>
        Personalized global trip experiences catered to your tastes are available from Tic Toc Travels. We guarantee that every trip is unforgettable by leading you through breathtaking scenery, a plethora of cultural experiences, and exhilarating adventures with our distinctive itineraries and local knowledge. Our passionate staff is committed to fulfilling your travel aspirations by offering top-notch assistance and service all along the way. Whether you're looking for adventure, discovery, or leisure, we offer the ideal trip package. Take off on a trip of a lifetime with Tic Toc Travels.
        </p>
      </div>
      <Location/>
    </div>
  )
}

export default About
