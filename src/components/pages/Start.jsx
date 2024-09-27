import { CiLinkedin } from "react-icons/ci";
import {FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Rectang2 = "Rectangle 201.png";
const Rectang = "Rectangle 26 (1).png";
const img1 = 'cube 1 (1).png';
const img2 = 'online-conference 1.png';
const img3 = 'technical-support 1 (1).png';
// const Land1 = "/Rectangle 34.png";
const Logo = "/logo 3.png"
const Vector = "/Vector (2).png"
// import { useState } from "react";
import ImgForm from "./ImgForm";

const Start = () => {


  return (
    <div className="">
    <div className="relative bg-black w-full h-[46vh] flex flex-col items-center justify-center">
       <img
        src={Rectang}
        alt="Rec"
        className="w-full h-auto opacity-60 h-[46vh]" 
      />
      <div className="absolute insert-0 lg:top-20 text-white text-center ">
        <h2 className="font-poppins text-6xl pb-5">How to Start</h2>
        <span className="font-poppins">We specialize in helping you build a team of <br /> expert developers & designers.</span>
      </div>
   </div>
   <div className="font-poppins text-[#16205F] px-[6.3vw] py-[13vh]">
     <h2 className=" text-3xl font-bold pb-5">How to Get Started with <br />      ABSA TECH</h2>
     <span className="text-[15px]">From full-time remote engineering teams to hourly  <br />  contractors, work with remote devs & designers as  <br />  needed</span>
   </div>
   <div className="text-[#16205F]">
  {/* Step by Step Process */}
  <div className="flex flex-col md:flex-row justify-between flex-wrap items-center md:mx-[6.8vw]">
    <div className="flex items-center mb-6 md:mb-0">
      <img src={img1} alt="Request Icon" className="w-[10vw] h-[10vh] md:w-[3.5vw] md:h-[7.5vh]" />
      <div className="px-5">
        <h2 className="text-xl md:text-2xl">01. Request</h2>
        <span className="text-[12px] md:text-[13px]">
          Tell us more about your <br /> requirements and technical needs
        </span>
      </div>
    </div>

    <div className="flex items-center mb-6 md:mb-0">
      <img src={img2} alt="Interview Icon" className="w-[10vw] h-[10vh] md:w-[3.5vw] md:h-[7.5vh]" />
      <div className="px-5">
        <h2 className="text-xl md:text-2xl">02. Interview</h2>
        <span className="text-[12px] md:text-[13px]">
          You interview candidates. Average 2 <br /> interviews to hire.
        </span>
      </div>
    </div>

    <div className="flex items-center mb-6 md:mb-0">
      <img src={img3} alt="Hire Icon" className="w-[10vw] h-[10vh] md:w-[3.5vw] md:h-[7.5vh]" />
      <div className="px-5">
        <h2 className="text-xl md:text-2xl">03. Hire</h2>
        <span className="text-[12px] md:text-[13px]">
          You choose who to hire, and we <br /> handle all the paperwork.
        </span>
      </div>
    </div>
  </div>

  {/* Why Hire Remote Developers Section */}
  <div className="pt-12 md:pt-20">
    <h2 className="text-2xl md:text-3xl font-bold text-center px-4 md:px-[6.4vw]">
      Why You Need To Hire <br /> Remote Developers & Designers
    </h2>

    <div className="flex flex-col justify-around gap-8 md:gap-4 font-bold py-10 md:py-20">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-40 justify-around pr-4 md:pr-[7vw]">
        <span className="text-center">Talent Shortage</span>
        <span className="text-center">Lack of Expertise</span>
        <span className="text-center">Quick Kick-Off</span>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-[10.5vw] justify-around md:pr-[2.2vw]">
        <span className="text-center">Cost Optimization</span>
        <span className="text-center">Talent Accessibility</span>
        <span className="text-center">Administrative Hassle</span>
      </div>
    </div>
  </div>
</div>

{/* sec img */}
<div>
<div className="relative flex justify-center">
       <img
        src={Rectang2}
        alt="Rec"
        className="w-[85vw] h-auto object-cover" 
      />
      <div className="absolute insert-0 lg:top-20 text-white px-10">
        <h2 className="font-poppins text-6xl text-start">1000+</h2>
        <span className="font-poppins">Developers & Designers</span>
      </div>
   </div>   
</div>

{/* form image section */}
<ImgForm/>
    {/* navSection section */}
<div className="pt-20">
      <div >
         <img src={Logo} alt="Logo" className="w-[200px] h-[80px] lg:w-[270px] lg:h-[90.54px] mx-[7vw]" />
      <div>
<div className="flex justify-around pt-4 mx-[1vw]">
<div className="flex flex-col gap-2">
             <span className="text-[13px]">Expertly trained, battle-tested, elite <br />  software developers & designers on demand</span>
           
             <a href="/17015003259" className="flex gap-2 items-center text-[13px]">  <FaPhone />17015003259</a>
             <a href="/absatech@gmail.com" className="flex gap-2 items-center text-[13px]"><MdOutlineEmail />absatech@gmail.com</a>
             <a href="/1101 32ND AVE SW ,Minot,ND,58701" className="flex gap-2 items-center text-[13px]">
             <img src={Vector} alt="Vector" className="w-3 h-5" />
             1101 32ND AVE SW ,Minot,ND,58701
             </a>
             <div className="flex flex-col pt-4">
                <h2 className="font-bold">Follow us</h2>
              <div className="flex pt-2 gap-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
  <CiLinkedin />
</a>
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
  <FaFacebookF />
</a>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
  <FaInstagram />
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
  <FaXTwitter />
</a>

              </div>
             </div>
         </div>
        <div className="flex flex-col text-[13px]">
            <h2 className='font-bold text-[13px]'>Company Contact</h2>
            <span>1101 32ND AVE SW ,Minot,ND,58701</span>
<span>Suite 140</span>
<span>United state TX 76092</span>
<span>000-000-0000</span>
<span>jeff@tradition.agency</span>
        </div>
        <div className="text-[13px]">
            <h2 className='font-bold'>Follow Us On Social Media</h2>
        <span>We have an active and engaged Social <br /> 
Media Presence. Stay up to date on what’s <br />
going on and who we are working with!</span>
</div>
      </div>
      </div>
</div>
</div>
    </div>
  );
};

export default Start