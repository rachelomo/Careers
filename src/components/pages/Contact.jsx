import { FaArrowRight, FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa';
const Rectang = "Rectangle 26 (1).png";
const Land1 = "/Rectangle 34.png";
import { useState } from "react";
import { CiLinkedin } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import SectionFooter from './SectionFooter';
// import { MdOutlineEmail } from 'react-icons/md';
// const Vector = "/Vector (2).png"
const Logo = "/logo 3.png"

const Contact = () => {
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        phone: '',
        email: '',
        details: '',
        privacyChecked: false,
      });
    
      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!formData.privacyChecked || !formData.email || !formData.company || !formData.phone) {
          alert("Please fill all required fields and accept privacy policy.");
          return;
        }
        // Call your API or email service
        console.log("Form submitted:", formData);
      };

  return (
    <div className='overflow-x-hidden'>     
         <div className="relative bg-black w-full h-[46vh] flex flex-col items-center justify-center">
    <img
     src={Rectang}
     alt="Rec"
     className="w-full h-[46vh] h-auto opacity-60" 
   />
   <div className="absolute insert-0 lg:top-20 text-white text-center ">
     <h2 className="font-poppins text-6xl pb-5">Contact</h2>
     <span className="font-poppins">We specialize in helping you build a team of <br /> expert developers & designers.</span>
   </div>
</div>
<div className="font-poppins text-[#16205F] px-[6.3vw] py-[13vh] flex flex-col">
  <h2 className=" text-3xl font-bold pb-5">Get in touch</h2>
  <span className="text-[14px] font-poppins pt-4">
  Please feel free to get in touch with us via any convenient means (phone, <br /> whatsapp, email, submit a contact form). We will be glad to answer your <br /> questions as soon as possible.
</span>
</div>
<div className="flex flex-col lg:flex-row justify-center pt-[18vh]">
  {/* Image Section */}
  <div className="w-full lg:w-[50vw] h-auto lg:h-[90vh] mt-4 lg:mt-0 ">
      <img src={Land1} alt="Land1" className="w-full h-full" />
    </div>

    {/* Form Section */}
    <div
      className="bg-white shadow-lg w-full lg:w-[34vw] h-auto lg:h-[80vh] relative lg:right-[7.5vw] lg:top-10 p-4 lg:p-8"
      style={{ borderRadius: "100px 0px 0px 0px" }}
    >
      <h2 className="font-poppins text-3xl leading-61 font-semibold mb-4 px-2">
        Connect With Your Next Great Hire Today!
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
    {/* Grid for Inputs */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label htmlFor="company" className="mb-1">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleInputChange}
          className="border border-gray-300 p-1 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1">Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="border border-gray-300 p-1 rounded"
        />
      </div>
    </div>
    {/* Additional Inputs */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label htmlFor="phone" className="mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="border border-gray-300 p-1 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="border border-gray-300 p-1 rounded"
        />
      </div>
    </div>
    <div className="flex flex-col">
      <label htmlFor="details" className="mb-1">Project Details</label>
      <textarea
        name="details"
        id="details"
        placeholder="Project Details"
        value={formData.details}
        onChange={handleInputChange}
        className="border border-gray-300 p-1 rounded h-22 resize-none"
      />
    </div>
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="check"
        name="privacyChecked"
        checked={formData.privacyChecked}
        onChange={handleInputChange}
        className="h-4 w-4 border-gray-300 rounded"
      />
      <label htmlFor="check" className="text-sm">By sending this form I confirm that I have read and accept the Privacy Policy</label>
    </div>
    <button
      type="submit"
      className="bg-[#F4950E] text-white py-2 px-4 rounded flex items-center mx-2.5"
    >
      Get Started <FaArrowRight className="ml-2" />
    </button>
  </form>

    </div>
    </div>
    {/* <SectionFooter/> */}
    <div className='flex justify-around pt-20 text-[#16205F]'>
   <div className='flex flex-col'>
   <img src={Logo} alt="Logo" className="w-[200px] h-[80px] lg:w-[270px] lg:h-[90.54px] " />
      <div className='pt-6'>
      <div className='flex flex-col px-3 gap-1'> 
           <h2 className='font-poppins'>Office</h2>
           <span>Partner</span>
           <span>info@absatech</span>
            <span className='font-bold'><a href="">+17015003259</a></span>
</div>
</div>
   </div>
<div className='flex justify-around gap-[30vw] pr-[6vw]'>
<div className=''>
      <div className='bg-yellow-300 border rounded-lg w-20 h-20'>

      </div>
      <div className='flex flex-col pt-6 gap-1'> 
     <h2 className='font-poppins'>admadiouf</h2>
      <span>Partner</span>
      <span>info@absatech</span>
       <span className='font-bold'><a href="">+17015003259</a></span>
</div>
</div>
<div>
      <div className='bg-yellow-300 border rounded-lg w-20 h-20'>

      </div>
    <div className='flex flex-col pt-6 gap-1'> <h2 className='font-poppins'>Adama Diouf</h2>
      <span>Funder/CEO</span>
      <span className=''>info@absatech</span>
      <span className='font-bold'><a href="">+17015003259</a></span>
      </div>
</div>
</div>
</div>

        {/* fOLLOW SECTION */}
        <div className="flex flex-col pt-20 text-[#16205F] px-[7.8vw]">
                <h2 className="font-bold font-poppins text-2xl">Follow us</h2>
              <div className="flex pt-2 gap-6 font-poppins text-2xl pt-3">
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

             <SectionFooter/>

</div>
  )
}

export default Contact