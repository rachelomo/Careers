import ImgForm from "./ImgForm";
import SectionFooter from "./SectionFooter";

const Rectang = "Rectangle 26 (1).png";
const personImg = "image 5.png";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-black w-full h-[45vh] flex flex-col items-center justify-center">
        <img
          src={Rectang}
          alt="Hero Background"
          className="w-full h-auto opacity-60 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 lg:p-8">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-6xl pb-5">About</h2>
          <span className="font-poppins text-sm md:text-base lg:text-lg">
            Do you want to learn more about ABSA TECH? Our team is looking for people who <br /> 
            want to work on interesting international projects, develop and learn new skills, <br /> 
            and share what they've learned with others.
          </span>
        </div>
      </div>

      {/* Information Section */}
      <div className="font-poppins text-[#16205F] px-4 py-8 md:px-[6.3vw] md:py-[13vh] flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold pb-5">Please join us</h2>
        <span className="text-sm md:text-base pb-2">
          Take a look at the open positions below.
        </span>
        <span className="text-sm md:text-base pt-4">
          If none of them suit you, or you feel you could help us in other ways, please fill out the form below <br /> 
          or contact us directly at <a href="mailto:carrers@absatech" className="text-blue-500 underline">carrers@absatech</a>
        </span>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center md:justify-around rounded-lg">
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left px-4 md:px-0">
          <span className="text-gray-700 text-sm md:text-base leading-relaxed">
            Absatech Contact refers to the contact information provided by <br />
            Absatech, a digital solution provider with a wealth of experience. <br />
            Absatech offers a reliable and accessible means of communication <br />
            for individuals, businesses, or clients seeking their services or <br />
            expertise. Whether you have inquiries, need assistance, or want to <br />
            discuss potential collaborations, the Absatech contact information <br />
            serves as your gateway to connect with their knowledgeable team. <br />
            Reach out to Absatech through the provided contact details to <br />
            explore digital solutions, discuss your unique needs, or simply <br />
            engage in a productive conversation with their dedicated <br />
            professionals.
          </span>
        </div>
        <div className="md:w-1/3 px-4 md:px-0">
          <img
            src={personImg}
            alt="Absatech Contact"
            className="rounded-lg shadow-lg w-full h-auto max-w-full"
          />
        </div>
      </div>

      <ImgForm />
      <SectionFooter />
    </div>
  );
}

export default About;
