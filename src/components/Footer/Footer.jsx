import React from 'react';
import FooterVid from '../../assets/video/footer.mp4';
import TicToc from '../../assets/TIcToc.png';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterLinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Best Places',
    link: '/best-places',
  },
  {
    title: 'Blogs',
    link: '/blogs',
  },
];

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-[-1]">
        <source src={FooterVid} type="video/mp4" />
      </video>
      <div className="container mx-auto py-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-t-xl p-5 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3">
                <img src={TicToc} alt="TicToc Logo" className="max-h-[60px]" />
                <h1 className="text-3xl font-bold">TicToc Travels</h1>
              </div>
              <p className="text-sm mt-4">
                Shop No.9, Neelkanth Shopping Arcade R.C. Marg, opp. The Fine Arts Society, Chembur Mumbai Maharashtra, 400071
              </p>
              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Mumbai, India</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/tictoctravels/">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/tictoctravels1/">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/company/tictoc-travels/">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            <div className="md:pl-10">
              <h1 className="text-xl font-bold mb-4">Important Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((link) => (
                  <li key={link.link} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-black text-gray-700">
                    <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                      <span>&#11162;</span> <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white mt-10">
          &copy; 2024 All rights reserved || Made with ❤️ by <a href="https://www.linkedin.com/in/krishnadhoot098/" className="">Krishna Dhoot</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
