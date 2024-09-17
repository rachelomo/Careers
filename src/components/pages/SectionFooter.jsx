const Logo = "/logo 3.png"
const Vector = "/Vector (2).png"
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const SectionFooter = () => {
  return (
<div className="pt-20 text-[#16205F]">
      <div>
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
            <h2 className='font-bold text-[13px] pb-4'>Company Contact</h2>
<div className="flex flex-col gap-4">
<span>1101 32ND AVE SW ,Minot,ND,58701</span>
<span>Suite 140</span>
<span>United state TX 76092</span>
<span>000-000-0000</span>
<span>jeff@tradition.agency</span>
</div>
        </div>
        <div className="text-[13px]">
            <h2 className='font-bold pb-4'>Follow Us On Social Media</h2>
        <span className="">We have an active and engaged Social <br /> 
Media Presence. Stay up to date on what’s <br />
going on and who we are working with!</span>
</div>
      </div>
      </div>
      </div>
      </div>

  )
}

export default SectionFooter