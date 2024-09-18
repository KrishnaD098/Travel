import React from 'react';
import Hero from "../components/Hero/Hero";
import MainVid from "../assets/video/Main.mp4";
import Places from "../components/Places/Places";
import Navbar from "../components/Navbar/Navbar";
import BannerPic from "../components/BannerPic/BannerPic"
import BannerImg from "../assets/cover-women.png"
import Blogs from "../pages/Blogs"
import Banner from "../components/Banner/Banner"
import Testimonial from "../components/Testimonial/Testimonial"
import Banner2 from "../assets/travel-cover2.png"

const Home = () => {
  return (
    <> 
    <div>
      {/* <Navbar /> */}
      <div className="h-[700px] relative">
       <video autoPlay loop muted className="absolute right-0 top-0 h-[728px] w-full object-cover z-[-1]" >
          <source src={MainVid} type="video/mp4" />
       </video>
       <Hero />
      </div>
      <Places />
      <BannerPic img={BannerImg} />
      <Blogs/>
      <Banner/>
      <BannerPic img={Banner2} />
      <Testimonial />
      </div>
    </>
  );
};

export default Home;
