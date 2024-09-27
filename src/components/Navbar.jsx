import { useState, useEffect, useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';

const Logo = "/logo 3.png";

// Dummy data for search functionality
const dummyData = [
  "Technologies",
  "Start",
  "Careers",
  "Work",
  "About",
  "Contact",
];

function Navbar() {
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const location = useLocation(); 

  // Refs for detecting clicks outside dropdown
  const homeDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  const toggleHomeDropdown = () => {
    setShowHomeDropdown(!showHomeDropdown);
    setShowServicesDropdown(false);
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
    setShowHomeDropdown(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    setShowHomeDropdown(false);
    setShowServicesDropdown(false);
  };

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const results = dummyData.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Close dropdown when clicking outside of them
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside home or services dropdown
      if (
        homeDropdownRef.current && !homeDropdownRef.current.contains(event.target) &&
        servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)
      ) {
        setShowHomeDropdown(false);
        setShowServicesDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='bg-white text-[#215098]'>
      <div className='flex items-center justify-between px-4 py-2 lg:pl-20 lg:px-4'>
        {/* Logo */}
        <img
          src={Logo}
          alt="logo"
          className='w-[150px] h-[60px] lg:w-[270px] lg:h-[80px] cursor-pointer'
          onClick={() => navigate('/')}
        />

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-2xl"
          onClick={(e) => {
            e.stopPropagation();
            toggleMobileMenu();
          }}
        >
          {showMobileMenu ? <MdClose /> : <BiMenuAltRight />}
        </button>

        {/* Desktop search and menu */}
        <div className="hidden md:flex justify-center w-full items-center space-x-6">
          {/* Home dropdown */}
          <div className="relative" ref={homeDropdownRef}>
            <button
              className="flex items-center cursor-pointer"
              onClick={toggleHomeDropdown}
            >
              Home <IoIosArrowDown />
            </button>
            {showHomeDropdown && (
              <div className="absolute mt-2 bg-white p-2 rounded shadow-lg flex flex-col z-20">
                <p
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => navigate('/Technologies')}
                >
                  Technologies
                </p>
                <p
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => navigate('/Start')}
                >
                  How to start
                </p>
              </div>
            )}
          </div>

          {/* Services dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              className="flex items-center cursor-pointer"
              onClick={toggleServicesDropdown}
            >
              Services <IoIosArrowDown />
            </button>
            {showServicesDropdown && (
              <div className="absolute mt-2 bg-white p-2 rounded shadow-lg flex flex-col">
                <p
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => navigate('/Careers')}
                >
                  Careers
                </p>
                <p
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => navigate('/')}
                >
                  Home
                </p>
              </div>
            )}
          </div>

          <li className="list-none cursor-pointer" onClick={() => navigate('/work')}>Our Work</li>
          <li className="list-none cursor-pointer" onClick={() => navigate('/about')}>About</li>
          <li className="list-none cursor-pointer" onClick={() => navigate('/contact')}>Contact</li>
        </div>

        <div className="hidden md:flex relative w-[250px] lg:w-[300px] ">
          <div className="flex  w-[250px] transition-all duration-500 ease-in-out lg:pr-[57px]">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-l-md w-[250px]"
            />
            <button className="text-black p-2 text-2xl bg-gray-100 rounded-r-md">
              <CiSearch />
            </button>
          </div>
          {/* Search results dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute mt-2 bg-white p-2 rounded shadow-lg w-full">
              {searchResults.map((result, index) => (
                <p
                  key={index}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => {
                    navigate(`/${result.toLowerCase().replace(/\s+/g, '')}`);
                    setSearchQuery('');
                    setSearchResults([]);
                  }}
                >
                  {result}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu items */}
      {showMobileMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg p-4 z-50 overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              toggleMobileMenu();
            }}
          >
            <MdClose />
          </button>
          <ul className="flex flex-col space-y-4 mt-8 z-20">
            <li>
              <button
                className="flex items-center text-lg font-medium cursor-pointer w-full"
                onClick={toggleHomeDropdown}
              >
                Home <IoIosArrowDown className="ml-1" />
              </button>
              {showHomeDropdown && (
                <div className="mt-2 bg-white p-2 rounded shadow-lg">
                  <p
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => {
                      navigate('/Technologies');
                      closeMobileMenu();
                    }}
                  >
                    Technologies
                  </p>
                  <p
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => {
                      navigate('/Start');
                      closeMobileMenu();
                    }}
                  >
                    How to start
                  </p>
                </div>
              )}
            </li>
            <li>
              <button
                className="flex items-center text-lg font-medium cursor-pointer w-full z-20"
                onClick={toggleServicesDropdown}
              >
                Services <IoIosArrowDown className="ml-1" />
              </button>
              {showServicesDropdown && (
                <div className="mt-2 bg-white p-2 rounded shadow-lg">
                  <p
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => {
                      navigate('/Careers');
                      closeMobileMenu();
                    }}
                  >
                    Careers
                  </p>
                  <p
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => {
                      navigate('/');
                      closeMobileMenu();
                    }}
                  >
                    Home
                  </p>
                </div>
              )}
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate('/work');
                closeMobileMenu();
              }}
            >
              Our Work
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate('/about');
                closeMobileMenu();
              }}
            >
              About
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate('/contact');
                closeMobileMenu();
              }}
            >
              Contact
            </li>
          </ul>

          {/* Mobile search bar */}
          <div className="mt-4">
            <div className="flex w-full p-1 transition-all duration-500 ease-in-out">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-l-md"
              />
              <button className="text-black p-2 text-2xl bg-gray-100 rounded-r-md">
                <CiSearch />
              </button>
            </div>
            {searchResults.length > 0 && (
              <div className="mt-2 bg-white p-2 rounded shadow-lg">
                {searchResults.map((result, index) => (
                  <p
                    key={index}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => {
                      navigate(`/${result.toLowerCase().replace(/\s+/g, '')}`);
                      setSearchQuery('');
                      setSearchResults([]);
                    }}
                  >
                    {result}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Conditionally render LandingPage only on the root route */}
      {location.pathname === '/' && <LandingPage />}
    </nav>
  );
}

export default Navbar;
