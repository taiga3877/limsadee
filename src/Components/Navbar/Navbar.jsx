import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from './image.png';

function Navbar() {
  const [scrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`fixed ${scrolled ? 'bg-gray-800' : 'bg-[#1C4DCB]'} right-0 left-0 duration-500 shadow-md z-50`}>
      <div className='max-w-[1440px] mx-auto flex h-[75px] justify-between items-center px-6 md:px-12'>
        <div className='flex items-center gap-8'>
          <NavLink to="/" onClick={closeMenu}>
            <img src={logo} alt="logo" className='h-[30px] w-[120px]' />
          </NavLink>
          <ul className='md:flex hidden gap-8 items-center text-white text-[19px]'>
            <NavLink
              to="/"
              className={({ isActive }) => `cursor-pointer transition ${isActive ? 'text-gray-300' : 'hover:text-gray-300'}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/ourservice"
              className={({ isActive }) => `cursor-pointer transition ${isActive ? 'text-gray-300' : 'hover:text-gray-300'}`}
            >
              Our Services
            </NavLink>
            <NavLink
              to="/three"
              className={({ isActive }) => `cursor-pointer transition ${isActive ? 'text-gray-300' : 'hover:text-gray-300'}`}
            >
              Our Work
            </NavLink>
            <NavLink
              to="/five"
              className={({ isActive }) => `cursor-pointer transition ${isActive ? 'text-gray-300' : 'hover:text-gray-300'}`}
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <button className={`hidden md:block ${scrolled ? 'bg-[#1C4DCB]' : 'bg-[#667DB6]'} text-white w-[180px] h-[40px] rounded-2xl transition-all hover:bg-gray-800
         `}>
          +998 (33) 258 73 58
        </button>
        <div className='md:hidden flex items-center'>
          <button onClick={() => setMenuOpen(true)} className='text-white text-2xl '>
            <FaBars />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeMenu}
      ></div>
      <div className={`md:hidden fixed top-0 right-0 w-[250px] h-full bg-gray-900 text-white transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 p-6 z-50`}>
        <button onClick={closeMenu} className='absolute top-4 right-4 text-2xl'><FaTimes /></button>
        <ul className='mt-12 flex flex-col gap-6 text-lg'>
          <NavLink to="/" className={({ isActive }) => `cursor-pointer transition ${isActive ? 'text-gray-300' : 'hover:text-gray-300'}`} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `cursor-pointer transition ${isActive ? 'text-gray-300' : 'hover:text-gray-300'}`} onClick={closeMenu}>
            Our Services
          </NavLink>
          <NavLink to="/work" className={({ isActive }) => `cursor-pointer transition ${isActive ? 'text-gray-300' : 'hover:text-gray-300'}`} onClick={closeMenu}>
            Our Work
          </NavLink>
          <NavLink to="/prices" className={({ isActive }) => `cursor-pointer transition ${isActive ? 'text-gray-300' : 'hover:text-gray-300'}`} onClick={closeMenu}>
            Prices
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
