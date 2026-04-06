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
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/andres-parra-arze-a62634114/',
    icon: FaLinkedin,
    backgroundClass: 'bg-blue-600',
  },
  {
    label: 'Github',
    href: 'https://github.com/andresparraarze',
    icon: FaGithub,
    backgroundClass: 'bg-gray-700',
  },
  {
    label: 'Mail',
    href: 'mailto:andresparraarze@gmail.com?subject=Portfolio Contact',
    icon: HiOutlineMail,
    backgroundClass: 'bg-red-700',
  },
  {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/15c6bbhNmrsqrOmMdx8vg2NQJB2aICIc3/view?usp=sharing',
    icon: BsFillPersonLinesFill,
    backgroundClass: 'bg-green-700',
  },
  {
    label: 'Facebook',
    href: 'https://m.facebook.com/people/Andres-Parra-Arze/100008705084352',
    icon: FaFacebook,
    backgroundClass: 'bg-blue-700',
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggleMenu = () => setNavOpen((prevState) => !prevState);
  const closeMenu = () => setNavOpen(false);

  return (
    <header className='fixed z-20 h-[90px] w-full bg-[#19191b] px-4 text-gray-300'>
      <nav className='flex h-full items-center justify-between' aria-label='Primary'>
        <img style={{ width: '138px' }} src={Logo} alt='Logo Parra' />

        <ul className='hidden md:flex'>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} smooth offset={50} duration={500}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type='button'
          onClick={handleToggleMenu}
          className='z-10 md:hidden'
          aria-controls='mobile-menu'
          aria-expanded={navOpen}
          aria-label={navOpen ? 'Close mobile menu' : 'Open mobile menu'}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          id='mobile-menu'
          className={
            !navOpen
              ? 'hidden'
              : 'absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#19191b]'
          }
        >
          {navItems.map((item) => (
            <li key={item.to} className='py-6 text-4xl'>
              <Link onClick={closeMenu} to={item.to} smooth offset={50} duration={500}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='fixed left-0 top-[35%] hidden md:flex flex-col'>
          <ul>
            {socialLinks.map(({ label, href, icon: Icon, backgroundClass }) => (
              <li
                key={label}
                className={`ml-[-100px] flex h-[60px] w-[160px] items-center justify-between duration-300 hover:ml-[-10px] ${backgroundClass}`}
              >
                <a
                  className='flex w-full items-center justify-between text-gray-300'
                  href={href}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  {label} <Icon size={25} />
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
