import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <>
          <footer className=" text-white py-4 font-display relative  ">
              <div className='relative text-white overflow-hidden pt-[30px] pb-[82px] rounded-t-[18px] rounded-tr-[18px] rounded-br-[3px] rounded-bl-[4px] custom-after' style={{ perspective: '800px'}}>
      <div className="container mx-auto px-6 z-20 relative ">
        {/* Branding Section */}
        <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-8 w-full mt-4 text-[14px] md:text-[20px] mx-[10px] font-medium md:w-1/4">
                      <div>
                      <img
            src="./public/assets/asset 0.png"
            className="h-[44px]"
            alt="Logo"
          />
          </div>
          <p className="mt-2">
            Welcome to our trading site! We offer the best, most affordable products and services around. Shop now and start finding great deals!
          </p>
        </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0 w-full md:w-1/6 ">
            <h2 className="text-[20px]  mt-4 font-medium md:text-xl  mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="">About Us</a></li>
              <li><a href="#" className="">Services</a></li>
              <li><a href="#" className="">Feature</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="mb-8 md:mb-0 w-full md:w-1/6">
            <h2 className="text-[20px]  mt-4 font-medium md:text-xl  mb-4">Support</h2>
            <ul className="space-y-2">
              <li><a href="#" className="">Terms & Conditions</a></li>
              <li><a href="#" className="">Privacy Policy</a></li>
              <li><a href="#" className="">FAQ</a></li>
              <li><a href="#" className="">Support Center</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="mb-8 md:mb-0 w-full md:w-1/6">
            <h2 className="text-[20px]  mt-4 font-medium md:text-xl  mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="">Careers</a></li>
              <li><a href="#" className="">Updates</a></li>
              <li><a href="#" className="">Jobs</a></li>
              <li><a href="#" className="">Announce</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
                      <div className="flex justify-center mt-8 border-2 border-white rounded-lg py-[10px] items-center w-fit h-fit m-auto flex-wrap">
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                              <FaFacebookF />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaInstagram />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaLinkedin />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaYoutube />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaTwitter />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaReddit />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaQuora />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaMedium />
                          </a>
                          <a href="" className=' text-[20px] mx-[10px] mt-4 lg:mt-0 text-white'>
                          <FaXTwitter />
                          </a>
        </div>
                  </div>
                  </div>
                  
    </footer>
    </>
  )
}
