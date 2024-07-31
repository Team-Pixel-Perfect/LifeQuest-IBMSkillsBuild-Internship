import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuData from './menuData';

const Header = () => {
  // State for mobile menu toggle
  const [navbarOpen, setNavbarOpen] = useState(false);

  // State for sticky navbar
  const [sticky, setSticky] = useState(false);

  // Toggle mobile menu
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Handle sticky navbar based on scroll
  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  // Add and remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
    return () => window.removeEventListener('scroll', handleStickyNavbar);
  }, []);

  // Get current location
  const location = useLocation();

  return (
    <header
  className={`header fixed top-0 left-0 z-40 flex w-full items-center transition-all duration-300 ${
    sticky
      ? 'bg-customWhite text-customBlack shadow-lg bg-opacity-10 backdrop-blur-xl'
      : 'text-customBlack'
  }`}
>
      <div className="container">
        <div className="relative flex items-center justify-center">
          <div className="w-60 max-w-full px-4 lg:mr-12">
            <Link to="/" className={`header-logo block w-full ${sticky ? 'py-3 lg:py-2' : 'py-5'} sm:py-2 sm:w-auto`}>
              <img
                src="/logo.png"
                alt="logo"
                className="w-20 mx-auto"
              />
            </Link>
          </div>

          <div className="hidden lg:flex w-full items-center justify-end lg:me-12">
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <Link
                to="/signin"
                className="px-7 py-3 text-base font-medium text-customBlack hover:opacity-70 dark:text-customWhite"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="ease-in-up shadow-btn hover:shadow-btn-hover rounded-sm bg-customGreen px-8 py-3 text-base font-medium text-customWhite transition duration-300 hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
