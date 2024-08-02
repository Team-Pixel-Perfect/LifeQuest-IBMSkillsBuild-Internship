import React from 'react';

function Footer() {
  return (
    <footer className="bottom-0 bg-customBlack text-customWhite py-4 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <p className="text-sm">
          Built by Team Pixel Perfect in IBMSkillsBuild Internship.
        </p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-customGreen hover:underline mx-2">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-customGreen hover:underline mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
