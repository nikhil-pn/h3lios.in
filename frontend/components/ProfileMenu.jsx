import React from "react";
import Link from "next/link";

const ProfileMenu = ({ showProfileMenu, setShowProfileMenu }) => {
  return (
    <>
      {showProfileMenu && (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
          <li
            className="cursor-pointer flex items-center gap-2 relative"
            onMouseLeave={() => setShowProfileMenu(false)}
          >
            <ul className="bg-white absolute top-10 right-0 min-w-[200px] px-1 py-1 text-black shadow-lg">
              <Link onClick={() => setShowProfileMenu(false)} href="/login">
                <li className="h-12 hover:text-white  flex justify-center items-center px-3 hover:bg-black rounded-md">
                  Login
                </li>
              </Link>
              <Link onClick={() => setShowProfileMenu(false)} href="/register">
                <li className="h-12 flex hover:text-white justify-center items-center px-3 hover:bg-black rounded-md">
                  Sign Up
                </li>
              </Link>

              <li className="h-12 hover:text-white flex justify-center items-center px-3 hover:bg-red-500 rounded-md">
                LogOut
              </li>
            </ul>
          </li>
        </ul>
      )}
    </>
  );
};

export default ProfileMenu;
