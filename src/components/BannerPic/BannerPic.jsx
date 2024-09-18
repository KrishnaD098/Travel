import React from 'react'

const BannerPic = ({img}) => {
  const bgImage={
    backgroundImage:`url(${img})`,
    backgroundSize:"cover",
    nackgroundPosition:"center",
    height:"625px"
  }
  return (
    <div data-aos="zoom-in" className="h-[400px] w-full" style={bgImage}></div>
  )
}

export default BannerPic
