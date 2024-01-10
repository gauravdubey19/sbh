"user client";
import { useState } from "react";
import Link from "next/link";

const Dropdown = (props) => {
  const { userEmail, btnOnClick, btnName } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // console.log("user: ", user);
  return (
    <div className="relative inline-block text-left">
      {/* Profile Image */}
      <img
        onClick={handleToggle}
        className="h-6 w-6 rounded-full cursor-pointer"
        src="/assets/bg6.png"
        alt="Profile"
      />

      {/* Dropdown */}
      {
        <div
          className={` ${
            !isOpen
              ? "hidden animate-fade-in-up duration-300"
              : "opacity-100 animate-fade-in-down duration-300"
          } backdrop-filter backdrop-blur-sm origin-top-right absolute right-0 mt-6 -mr-2 md:-mr-4 w-auto rounded-md shadow-lg border-b-[0.5px] border-l-[0.5px] border-[#53c28b] ring-1 ring-black ring-opacity-5 focus:outline-none ease-in-out`}
        >
          <div
            className="p-1 flex flex-col items-center justify-center gap-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Dropdown Items */}
            <div className="block text-sm" role="menuitem">
              {userEmail}
            </div>
            <Link
              href={`/profile/${userEmail}`}
              onClick={() => setIsOpen(!isOpen)}
              className="viewProfile allBtn w-[7rem] h-[2rem] text-md rounded-md"
            >
              View Profile
            </Link>
            <button
              onClick={btnOnClick}
              role="userLogout"
              className="signout allBtn w-full h-[2rem] text-md rounded-md"
            >
              {btnName}
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Dropdown;
