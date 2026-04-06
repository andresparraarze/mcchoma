import React, { useState } from 'react';
import { FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

const navItems = [
  { to: 'homemain', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact-form', label: 'Contact' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andres-parra-arze-a62634114/',
    icon: FaLinkedin,
    backgroundClass: 'bg-sky-600/90',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/andresparraarze',
    icon: FaGithub,
    backgroundClass: 'bg-gray-600/90',
  },
  {
    label: 'Email',
    href: 'mailto:andresparraarze@gmail.com?subject=Portfolio Contact',
    icon: HiOutlineMail,
    backgroundClass: 'bg-rose-700/90',
  },
  {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/15c6bbhNmrsqrOmMdx8vg2NQJB2aICIc3/view?usp=sharing',
    icon: BsFillPersonLinesFill,
    backgroundClass: 'bg-emerald-700/90',
  },
  {
    label: 'Facebook',
    href: 'https://m.facebook.com/people/Andres-Parra-Arze/100008705084352',
    icon: FaFacebook,
    backgroundClass: 'bg-blue-700/90',
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggleMenu = () => setNavOpen((prevState) => !prevState);
  const closeMenu = () => setNavOpen(false);

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gray-900/80 px-4 backdrop-blur'>
      <nav className='mx-auto flex h-20 w-full max-w-6xl items-center justify-between' aria-label='Primary'>
        <img className='w-32 md:w-36' src={Logo} alt='Andres Parra logo' />

        <ul className='hidden items-center text-sm font-medium text-gray-100 md:flex'>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth
                offset={-70}
                duration={500}
                className='rounded-lg px-3 py-2 hover:bg-white/10'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type='button'
          onClick={handleToggleMenu}
          className='rounded-lg p-2 text-gray-50 hover:bg-white/10 md:hidden'
          aria-controls='mobile-menu'
          aria-expanded={navOpen}
          aria-label={navOpen ? 'Close mobile menu' : 'Open mobile menu'}
        >
          {navOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        <ul
          id='mobile-menu'
          className={`absolute inset-x-0 top-20 border-b border-white/10 bg-gray-900/95 px-6 pb-8 pt-4 backdrop-blur md:hidden ${
            navOpen ? 'block' : 'hidden'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.to} className='px-0 py-2 text-lg'>
              <Link
                onClick={closeMenu}
                to={item.to}
                smooth
                offset={-70}
                duration={500}
                className='block rounded-lg px-4 py-3 font-medium text-gray-50 hover:bg-white/10'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='fixed left-0 top-[32%] hidden md:flex flex-col'>
          <ul>
            {socialLinks.map(({ label, href, icon: Icon, backgroundClass }) => (
              <li
                key={label}
                className={`ml-[-110px] flex h-[56px] w-[172px] items-center justify-between border border-white/10 px-4 text-sm font-medium text-gray-50 duration-300 hover:ml-[-10px] ${backgroundClass}`}
              >
                <a className='flex w-full items-center justify-between' href={href} target='_blank' rel='noreferrer noopener'>
                  {label} <Icon size={22} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
