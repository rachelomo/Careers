import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ImgForm from './ImgForm';
import SectionFooter from './SectionFooter';

const Rectang = "Rectangle 26 (1).png";

const Careers = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-black w-full h-[45vh] flex flex-col items-center justify-center">
        <img
          src={Rectang}
          alt="Rec"
          className="w-full h-auto opacity-60"
        />
        <div className="absolute insert-0 lg:top-20 text-white text-center ">
          <h2 className="font-poppins text-4xl lg:text-6xl pb-5">Careers</h2>
          <span className="font-poppins text-sm lg:text-base">
            Do you want to learn more about ABSA TECH? Our team is looking for people who  <br />
            want to work on interesting international projects, develop and learn new skills,  <br />
            and share what they've learned with others.
          </span>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="font-poppins text-[#16205F] px-6 lg:px-[6.3vw] py-[10vh] lg:py-[13vh] flex flex-col">
        <h2 className="text-2xl lg:text-3xl font-bold pb-5">Please join us</h2>
        <span className='text-sm lg:text-[14px]'>
          Take a look at the open positions below.
        </span>
        <span className="text-sm lg:text-[14px] font-poppins pt-4">
          If none of them suit you, or you feel you could help us in other ways, 
          please fill out the form below or contact us directly at careers@absatech
        </span>
      </div>

<div className='flex justify-around'>
        {/* Developer Roles Section */}
        <div className='pt-20 px-4 lg:px-[6.5vw]'>
      <h2 className='text-[#16205F] font-bold text-2xl lg:text-3xl'>Developers</h2>
      
      {/* Container for the table layout */}
      <div className='flex flex-col gap-10 mt-10'>
        
        {/* Role Section */}
        <div className='flex flex-col lg:flex-row lg:justify-between gap-6'>
          <h3 className='text-[#16205F] font-bold text-xl lg:text-2xl lg:w-1/3'>ROLE</h3>
          <div className='flex flex-col lg:w-2/3'>
            <div className='flex flex-col'>
              <h2 className='text-[#16205F] font-bold text-lg lg:text-xl'>
                Senior Web Full Stack Developer
              </h2>
              <p className='text-[#16205F] text-sm lg:text-base mt-2 w-4/3'>
                Seniority in development is not just about how much time you have spent behind the computer screen. 
                It's  the way you think, how you approach problems, and their  responsibility you take on and feel.
              </p>
              <div className='pt-5 flex flex-col lg:flex-row gap-10'>
                <button className="bg-[#F4950E] text-white py-2 px-4 rounded flex items-center justify-center gap-1">
                  Apply Now <FaArrowRight className="pt-1"/>
                </button>
                <button className="bg-white  text-[#16205F] rounded flex items-center justify-center">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className='flex flex-col lg:flex-row lg:justify-between gap-6'>
          <h3 className='text-[#16205F] font-bold text-xl lg:text-2xl lg:w-1/3'>SKILLS</h3>
          <div className='flex flex-col lg:w-2/3'>
            <div className='flex flex-wrap gap-2'>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Node.js</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">React.js</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Vue.js</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Typescript</button>
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Javascript</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Next.js</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Amplify</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">AWS</button>
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Terraform</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">C# and .NET</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">GraphQL</button>
             
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
            <button className="bg-yellow-300 text-white py-1 px-2 rounded">Serverless Framework</button>
            </div>
          </div>
        </div>
        
        {/* Location Section */}
        <div className='flex flex-col lg:flex-row lg:justify-between gap-6'>
          <h3 className='text-[#16205F] font-bold text-xl lg:text-2xl lg:w-1/3'>LOCATION</h3>
          <div className='lg:w-2/3'>
            <span className='text-sm lg:text-base'>
              Remote,<br />
              Ostrava - Czech Republic,<br />
              Brno - Czech Republic,<br />
              Barcelona - Spain,<br />
              Prague - Czech Republic,<br />
              Zlín - Czech Republic
            </span>
          </div>
        </div>
        
      </div>
    </div>

    {/* second */}
          {/* Design Roles Section */}
          <div className='pt-20 px-4 lg:px-[6.5vw]'>
      <h2 className='text-[#16205F] font-bold text-2xl lg:text-3xl'>Design</h2>
      
      {/* Container for the table layout */}
      <div className='flex flex-col gap-10 mt-10'>
        
        {/* Role Section */}
        <div className='flex flex-col lg:flex-row lg:justify-between gap-6'>
          <h3 className='text-[#16205F] font-bold text-xl lg:text-2xl lg:w-1/3'>ROLE</h3>
          <div className='flex flex-col lg:w-2/3'>
            <div className='flex flex-col'>
              <h2 className='text-[#16205F] font-bold text-lg lg:text-xl'>
                Senior Web Full Stack Developer
              </h2>
              <p className='text-[#16205F] text-sm lg:text-base mt-2'>
                Seniority in development is not just about how much time you have spent behind the computer screen. 
                It's  the way you think, how you approach problems, and their  responsibility you take on and feel.
              </p>
              <div className='pt-5 flex flex-col lg:flex-row gap-10'>
                <button className="bg-[#F4950E] text-white py-2 px-4 rounded flex items-center justify-center gap-1">
                  Apply Now <FaArrowRight className="pt-1"/>
                </button>
                <button className="bg-white text-[#16205F] rounded flex items-center justify-center">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className='flex flex-col lg:flex-row lg:justify-between gap-6'>
          <h3 className='text-[#16205F] font-bold text-xl lg:text-2xl lg:w-1/3'>SKILLS</h3>
          <div className='flex flex-col lg:w-2/3'>
            <div className='flex flex-wrap gap-2'>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Node.js</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">React.js</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Vue.js</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Typescript</button>
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Javascript</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Next.js</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Amplify</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">AWS</button>
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">Terraform</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">C# and .NET</button>
              <button className="bg-yellow-300 text-white py-1 px-2 rounded">GraphQL</button>
             
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
            <button className="bg-yellow-300 text-white py-1 px-2 rounded">Serverless Framework</button>
            </div>
          </div>
        </div>
        
        {/* Location Section */}
        <div className='flex flex-col lg:flex-row lg:justify-between gap-6'>
          <h3 className='text-[#16205F] font-bold text-xl lg:text-2xl lg:w-1/3'>LOCATION</h3>
          <div className='lg:w-2/3'>
            <span className='text-sm lg:text-base'>
              Remote,<br />
              Ostrava - Czech Republic,<br />
              Brno - Czech Republic,<br />
              Barcelona - Spain,<br />
              Prague - Czech Republic,<br />
              Zlín - Czech Republic
            </span>
          </div>
        </div>
        
      </div>
    </div>
</div>

      {/* Designers Roles Section */}
      {/* Similar structure as developers */}
      {/* ... */}

      {/* Form Section */}
      <ImgForm />

      {/* Footer Section */}
      <SectionFooter />
    </div>
  );
}

export default Careers;
