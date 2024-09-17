import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import ImgForm from "./pages/ImgForm";
import SectionFooter from "./pages/SectionFooter";
import { useNavigate } from "react-router-dom";

const Land = "/Rectangle 26.png";
const Cube1 = "cube 1.png";
const Cube2 = "/software-application 1.png";
const Cube3 = "/technical-support 1.png";
const Frame = 'Frame 35297.png';
const Link = "/link 1.png";
const Link1 = "/management 1.png";
const Link2 = "/outsourcing 1.png";
const Rectangle = "/Rectangle 162.png";
const Link3 = "/shield 1.png";
// const frontend = "/frontend 2.png";
const Angular = "/angular-logo-icon-png-svg 1.png";
const Node = '/image 4.png';
const Next = '/image 3.png';
const React = '/React_logo_wordmark 1.png';
const FrameD = '/Frame 35321.png';

const LandingPage = () => {
  const navigate = useNavigate();

  // Function to handle "Get Started" button click
  const handleGetStarted = () => {
    navigate('/Start'); // Add navigation to your "Get Started" page
  };

  return (
    <div className="pt-8 overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row pr-[5.5vw] overflow-hidden">
        <div
          className="bg-white shadow-lg w-full lg:w-[43vw] h-auto lg:h-[63vh] relative lg:left-[6.8vw] lg:top-[8vh] lg:pt-10"
          style={{ borderRadius: "0px 100px 0px 0px" }}
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-semibold mb-4 px-4">
            We Assist Organizations In Their Journey Toward Improvement
          </h2>

          <span className="block mb-4 font-poppins text-base md:text-lg leading-relaxed px-4">
            Automation may sound intimidating, but let's simplify it. You excel
            in your business for a reason – your expertise. We're here to
            simplify your operations, so you can focus on what you do best
            without worrying about where the next opportunity will come from.
          </span>
          <button
            onClick={handleGetStarted}
            className="bg-[#F4950E] text-white py-2 px-4 rounded flex items-center mx-4"
          >
            Get Started <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="w-full lg:w-[55vw] h-auto lg:h-[78vh] mt-4 lg:mt-0">
          <img src={Land} alt="Land" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Down Page Section */}
      <div className="flex flex-col lg:flex-row justify-around py-20 mx-[5.3vw] gap-8">
        <div className="flex gap-3">
          <img src={Cube1} alt="cube1" className="w-[50px] h-[50px]" />
          <div>
            <h2 className="text-xl font-bold">Architect your Solution</h2>
            <span className="font-semibold text-base">
              Our team tackles your operational, <br />
              technological, and strategic challenges <br />
              through an in-depth understanding of <br />
              your business. We design a strategic <br />
              roadmap to guide your goals.
            </span>
          </div>
        </div>
        {/* Second */}
        <div className="flex gap-3">
          <img src={Cube2} alt="cube2" className="w-[50px] h-[50px]" />
          <div>
            <h2 className="text-xl font-bold">Engineer your Solution</h2>
            <span className="font-semibold text-base">
              We promptly put together your nearshore <br />
              engineering dream team to fulfill your <br />
              specific requirements.
            </span>
          </div>
        </div>
        {/* Third */}
        <div className="flex gap-3">
          <img src={Cube3} alt="cube3" className="w-[50px] h-[50px]" />
          <div>
            <h2 className="text-xl font-bold">ReEngineer your Business Process</h2>
            <span className="font-semibold text-base">
              Bolstered by our team, your digital <br />
              transformation swiftly gains speed and <br />
              evolves into digital acceleration.
            </span>
          </div>
        </div>
      </div>

      {/* Easy Process Section */}
      <div className="bg-black p-12 lg:p-20">
        <div className="text-center text-white">
          <p className="font-poppins text-sm">How to start</p>
          <h2 className="font-poppins text-2xl lg:text-3xl leading-61">
            Easy Process
          </h2>
          <span className="font-poppins text-xs lg:text-sm text-[#808080]">
            We specialize in helping you build a team of expert developers,
            designers, testers, and leaders.
          </span>
        </div>
        <div className="flex justify-center pt-10 gap-4 lg:gap-[8vw]">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={Frame} alt="frame" className="w-[10vw] h-[18vh]" />
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="mx-[9vw] pt-10">
        <div>
          <p className="font-bold font-poppins text-lg">Expertise</p>
          <h2 className="font-poppins text-2xl font-bold">
            Hire Permanent and Remote Developers & Designers
          </h2>
          <p className="text-base pt-2">
            From full-time remote engineering teams to hourly contractors, work
            with remote devs & Designers as needed.
          </p>
        </div>
        <div className="flex flex-wrap justify-around gap-10 pt-10">
          {/* Expertise options */}
          {[
            { src: Link, title: "Dedicated Teams", desc: "Find your next team member" },
            { src: Link1, title: "Staff Augmentation", desc: "Build a distributed development team" },
            { src: Link2, title: "Software Outsourcing", desc: "End-to-End Software Development Outsourcing Solutions" },
            { src: Link3, title: "Remote Office", desc: "Open your own remote development center" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={item.src} alt={item.title} className="w-[50px] h-[50px]" />
              <h2 className="font-bold pt-3">{item.title}</h2>
              <span className="text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Specialized Staff Section */}
      <div className="mx-[9vw] pt-20">
        <div>
          <p className="leading-61 font-bold">Specialized</p>
          <h2 className="font-poppins text-3xl font-bold">
            Specialized Staff We Provide
          </h2>
        </div>
        <div className="pt-5 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Developer tools */}
          {[
            "Frontend Engineers",
            "Fullstack Engineers",
            "UI/UX Engineers",
            "QA Engineers",
            "Product Designer",
            "Database Admin",
            "Angular Developers",
            "DevOps + DevSecOps Engineers",
            "PHP Developers",
            "WordPress CMS Developers",
            "Mobile App Developers",
            "AI and ML Engineers",
            "Data Scientists",
            "Project Managers",
            "Business Analysts",
            "Information Security Engineers",
            "Application Security Engineers",
            "iOS and Android Developers",
            "Solution Architects",
            "Tech Leads / Team Leads",
            "Golang Developers"
          ].map((role, index) => (
            <div key={index} className="flex items-center gap-4">
              <img src={Rectangle} alt="frontend" className="w-[34px] h-[70px]" />
              <div>
                <h2 className="text-[15px]">{role}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mt-20">
        <div className="text-center">
          <p className="font-bold text-sm">Specialized</p>
          <h2 className="font-bold text-2xl pt-2">Technologies</h2>
        </div>
        <div className="flex justify-center gap-4 lg:gap-20 pt-10 overflow-x-auto">
          <img src={Angular} alt="Angular" className="w-[12vw] h-[6vh]" />
          <img src={Node} alt="Node" className="w-[10vw] h-[10vh]" />
          <img src={Next} alt="Next" className="w-[10vw] h-[9vh]" />
          <img src={React} alt="React" className="w-[10vw] h-[7vh]" />
          <IoIosArrowForward size={40} className="text-black cursor-pointer" />
        </div>
      </div>

      {/* Client Section */}
      <div className="bg-[#F8F8F8] mt-20">
        <div className="text-center">
          <img src={FrameD} alt="FrameD" />
        </div>
      </div>

      {/* Second Image Section */}
      <ImgForm />

      {/* Footer Section */}
      <SectionFooter />
    </div>
  );
};

export default LandingPage;
