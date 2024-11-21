import React from "react";
import logo from "../logo.svg";

const Navbar = ({
  onScrollToHome,
  onScrollToAbout,
  onScrollToProjects,
  onScrollToContact,
}) => {
  return (
    <div className='flex justify-end bg-black/90 w-full h-14'>
      {/* <img className='w-12' src={logo} alt='Musira Khan' /> */}

      {/* <div className='p-4 text-white'>Musira Khan</div> */}

      <div className='flex text-white gap-2'>
        <button className='p-4' onClick={onScrollToAbout}>
          About
        </button>
        <button className='p-4' onClick={onScrollToProjects}>
          Projects
        </button>
        <button className='p-4' onClick={onScrollToContact}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
