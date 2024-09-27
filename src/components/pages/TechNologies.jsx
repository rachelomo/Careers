import ImgForm from "./ImgForm";
import SectionFooter from "./SectionFooter";
const images = [
     { src: 'js 1.png', alt: 'JavaScript Logo', width: '25 px', height: '40px' },
     { src: 'react_logo 1.png', alt: 'React Logo', width: '50px', height: '45px' },
     { src: 'logo-vuejs-min 1.png', alt: 'Vue.js Logo', width: '50px', height: '40px' },
     { src: 'e-icon 1.png', alt: 'e-icon', width: '30px', height: '30px'},
     { src: 'html 1.png', alt: 'html 1.png', width: '32px', height: '38px' },
     { src: 'css 1.png', alt: 'css 1.png', width: '35px', height: '38px' },
     { src: '2560px-Node.js_logo 1.png', alt: '2560px-Node.js_logo 1.png', width: '45px', height: '30px' },
     { src: 'Java_programming_language_logo 1.png', alt: 'Java_programming_language_logo 1.png', width: '45px', height: '42px' },
     { src: 'Python-Symbol.png', alt: 'Python-Symbol.png', width: '60px', height: '35px' },
     { src: 'PHP-logo.png', alt: 'PHP-logo.png', width: '30px', height: '30px' },
     { src: 'c-sharp-c-logo-02F17714BA-seeklogo 1.png', alt: 'c-sharp-c-logo-02F17714BA-seeklogo 1.png', width: '30px', height: '30px' },
     { src: '1822px-ISO_C++_Logo 1.png', alt: '1822px-ISO_C++_Logo 1.png', width: '30px', height: '30px' },
     { src: 'laravel-logo 1.png', alt: 'laravel-logo 1.png', width: '60px', height: '45px' },
     { src: 'c-sharp-c-logo-02F17714BA-seeklogo 1.png', alt: 'c-sharp-c-logo-02F17714BA-seeklogo 1.png', width: '30px', height: '30px' },
     { src: 'symfony-logo-png-2 1.png', alt: 'symfony-logo-png-2 1.png', width: '70px', height: '35px' },
     { src: '2560px-Node.js_logo 1.png', alt: '2560px-Node.js_logo 1.png', width: '45px', height: '30px' },
     { src: '68747470733a2f2f766567696269742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30352f657870726573736a732e706e67 1.png', alt: '68747470733a2f2f766567696269742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30352f657870726573736a732e706e67 1.png', width: '45px', height: '30px' },
     { src: 'download (1) 1.png', alt: 'download (1) 1.png', width: '55px', height: '17px' },
     { src: 'iOS-Logo-2013 1.png', alt: 'iOS-Logo-2013 1.png', width: '50px', height: '28px' },
     { src: 'react-native 1.png', alt: 'react-native 1.png', width: '48px', height: '45px' },
     { src: 'Google-flutter-logo 1.png', alt: 'Google-flutter-logo 1.png', width: '45px', height: '30px' },
     { src: 'Kotlin_logo 1.png', alt: 'Kotlin_logo 1.png', width: '45px', height: '20px' },
     { src: '1280px-Ionic_Logo 1.png', alt: '1280px-Ionic_Logo 1.png', width: '50px', height: '22px' },
     { src: 'MySQL-Logo 1.png', alt: 'MySQL-Logo 1.png', width: '50px', height: '45px' },
     { src: 'Redis-Logo 1.png', alt: 'Redis-Logo 1.png', width: '75px', height: '55px' },
     { src: 'microsoft-sql-server-logo-96AF49E2B3-seeklogo 1.png', alt: 'microsoft-sql-server-logo-96AF49E2B3-seeklogo 1.png', width: '45px', height: '50px' },
     { src: 'postgresql-icon-12 1.png', alt: 'postgresql-icon-12 1.png', width: '60px', height: '40px' },
     { src: 'mariadb-logo-vert_blue-transparent 1.png', alt: 'mariadb-logo-vert_blue-transparent 1.png', width: '40px', height: '45px' },
     { src: 'mongodb_logo1-76twgcu2dm 1.png', alt: 'mongodb_logo1-76twgcu2dm 1.png', width: '4vw', height: '5vh' },
     { src: 'Redis-Logo 1.png', alt: 'Redis-Logo 1.png', width: '75px', height: '55px' },
     { src: 'Redis-Logo 1.png', alt: 'Redis-Logo 1.png', width: '75px', height: '55px' },
     { src: 'Oracle-Logo 1.png', alt: 'Oracle-Logo 1.png', width: '45px', height: '35px' },
     { src: '1280px-Go_Logo_Blue 1.png', alt: '1280px-Go_Logo_Blue 1.png', width: '40px', height: '25px' },
     { src: '1280px-Go_Logo_Blue 1.png ', alt: '1280px-Go_Logo_Blue 1.png', width: '40px', height: '25px' },
     { src: 'symfony-logo-png-2 1.png', alt: 'symfony-logo-png-2 1.png', width: '70px', height: '35px' },

     { src: '1280px-Go_Logo_Blue 1.png', alt: '1280px-Go_Logo_Blue 1.png', width: '40px', height: '25px' },
     { src: 'angular-logo-icon-png-svg 1.png', alt: 'angular-logo-icon-png-svg 1.png', width: '50px', height: '12px' },
     { src: 'android_logo_PNG3 1.png', alt: 'android_logo_PNG3 1.png', width: '35px', height: '32px' },
     { src: 'download (2) 1.png', alt: 'download (2) 1.png', width: '40px', height: '20px' },
     { src: 'fe5f71c970ef036c3b4407faa9ce6c69_300_550 1.png', alt: 'fe5f71c970ef036c3b4407faa9ce6c69_300_550 1.png', width: '35px', height: '32px' },
     { src: 'hadoop 1.png', alt: 'hadoop 1.png', width: '35px', height: '32px' },
     
     { src: 'OpenCV_logo_black_ 1.png', alt: 'OpenCV_logo_black_ 1.png', width: '35px', height: '32px' },

     // Add the remaining images here
   ];
// Reusable ImageCard component
const ImageCard = ({ src, alt, width, height }) => (
     <div className="bg-white p-3 mx-auto my-4 rounded border shadow-lg flex justify-center items-center max-w-full lg:relative left-4">
       <img src={src} alt={alt}   className="w-auto h-auto object-contain max-w-full max-h-full" style={{ width, height }} />
     </div>
   ); 
   const TechNologies = () => {
     return (
       <div className="overflow-hidden">
         <div className="relative bg-black w-full h-[46vh] flex flex-col items-center justify-center">
           <img
             src="Rectangle 26 (1).png"
             alt="Rec"
             className="w-full h-auto opacity-60 h-[46vh]  fit-contain"
           />
           <div className="absolute lg:top-20 text-white text-center">
             <h2 className="font-poppins text-6xl pb-5">Technologies</h2>
             <span className="font-poppins">
               We specialize in helping you build a team of <br /> expert developers & designers.
             </span>
           </div>
         </div>
         
         <div className="font-poppins text-[#16205F] px-[6.3vw] py-[13vh]">
           <h2 className="text-3xl font-bold pb-5">Technologies</h2>
           <span className="text-[15px]">
             Using the right technology for the right problem is our <br />
             mantra. We are agile about learning new processes <br />
             and tools to save time and reduce complexity.
           </span>
         </div>
   
        {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-[2.1vw] py-5">
        <button className="bg-yellow-300 border rounded-[10px] px-6">
          All
        </button>
        <button className="py-2">Frontend</button>
        <button className="py-2">Backend</button>
        <button className="py-2">Frameworks</button>
        <button className="py-2">Mobile App</button>
        <button className="py-2">Database</button>
        <button className="py-2">Google</button>
        <button className="py-2">Data Science</button>
        <button className="py-2">Machine Learning</button>
        <button className="py-2">DevOps</button>
        <button className="py-2">CMS</button>
        <button className="py-2">ECommerce</button>
      </div>
   
         {/* Technology Icons */}
         <div className="pt-20">
           <div className="grid grid-cols-6 gap-10 justify-center">
             {images.map((img, index) => (
               <ImageCard key={index} src={img.src} alt={img.alt} width={img.width} height={img.height} />
             ))}
           </div>
         </div>
           {/* form image section */}
<ImgForm/>
<div className="text-[#16205F]">
<SectionFooter/></div> 
       </div>
     );
   };
   
   export default TechNologies;
   

