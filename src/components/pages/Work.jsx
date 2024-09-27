import React from 'react'
import ImgForm from './ImgForm';
import SectionFooter from './SectionFooter';
const Rectang = "Rectangle 26 (1).png";
const image1 = "p11 1.png"
const image2 = "p10 1.png"
const image3 = "p7 1.png"
const image4 = "p8 1.png"
const image5 = "p12 1.png"
const image6 = "p9 1.png"
const image7 = "p13 1.png"
const image8 = "p2 1.png"
const image9 = "p4 1.png"
const image10 = "p3 1.png"
const image11 = "p5 1.png"
const image12 = "p6 1.png"

const Work = () => {
  return (
     <div>
     {/* Header Section */}
     <div className="relative bg-black w-full h-[46vh] flex flex-col items-center justify-center">
       <img
         src={Rectang}
         alt="Rec"
         className="w-full h-auto h-[46vh] object-cover opacity-60"
       />
       <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
         <h2 className="font-poppins text-3xl md:text-4xl lg:text-6xl pb-5">Our Work</h2>
         <span className="font-poppins text-sm md:text-base lg:text-lg">
           Do you want to learn more about ABSA TECH? Our team is looking for people who <br />
           want to work on interesting international projects, develop and learn new skills, <br />
           and share what they've learned with others.
         </span>
       </div>
     </div>
       {/* Introduction Section */}
       <div className="font-poppins text-[#16205F] px-10 md:px-10 lg:px-[6.3vw] py-10 lg:py-[13vh] flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold pb-5">Please join us</h2>
        <span className='text-sm md:text-base'>Take a look at the open positions below.</span>
        <span className="text-sm md:text-base font-poppins pt-4">
          If none of them suit you, or you feel you could help us in other ways, please fill out the form below <br />
          or contact us directly at <a href="mailto:carrers@absatech" className="">carrers@absatech</a>
        </span>
      </div>
{/* images */}
<div className='flex flex-col gap-6 px-4'>
    {/* Adjusting each row to be responsive */}
    <div className='flex flex-wrap gap-[11.5vw] justify-center'>
         <img src={image1} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[460px]' />
         <img src={image2} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[460px]' />
    </div>
    <div className='flex flex-wrap gap-[11.5vw] justify-center'>
         <img src={image3} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[460px]' />
         <img src={image4} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[460px]' />
    </div>
    <div className='flex flex-wrap gap-[11.5vw] justify-center'>
         <img src={image5} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[460px]' />
         <img src={image6} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[460px]' />
    </div>
    <div className='flex flex-wrap gap-[11.5vw] justify-center'>
         <img src={image7} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[460px]' />
         <img src={image8} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[460px]' />
    </div>
    <div className='flex flex-wrap gap-[11.5vw] justify-center'>
         <img src={image9} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[460px]' />
         <img src={image10} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[460px]' />
    </div>
    <div className='flex flex-wrap gap-[11.5vw] justify-center'>
         <img src={image11} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[500px]' />
         <img src={image12} alt="" className='w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto max-w-[500px] max-h-[500px]' />
    </div>
</div>

<ImgForm/>
<SectionFooter/>
</div>
  )
}

export default Work