import React from 'react'

const Location = () => {
  return (
    <>
    <span id="location"></span>
    <section data-aos="fade-up" className="">
    <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://maps.google.com/maps?q=Shop+No.9%2C+Neelkanth+Shopping+Arcade+R.C.+Marg%2C+opp.+The+Fine+Arts+Society%2C+Chembur+Mumbai+Maharashtra%2C+400071&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
        </section>
      </>  
  )
}

export default Location
