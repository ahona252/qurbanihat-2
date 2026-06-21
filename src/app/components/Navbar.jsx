"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarImage, AvatarFallback } from "keep-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="border-b px-4 bg-amber-50 sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full relative">
        
        {/* Brand/Logo Section */}
        <div className="flex gap-2 items-center z-50">
          <Image
            src="/icon.webp"
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-10 w-10 sm:h-12 sm:w-12"
          />
          <h3 className="font-black text-xl sm:text-2xl tracking-tight text-blue-950">QurbaniHat</h3>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 text-gray-700 focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`
          fixed md:static inset-x-0 top-0 pt-24 pb-10 px-6 md:p-0
          bg-amber-100 md:bg-transparent shadow-lg md:shadow-none
          flex flex-col md:flex-row md:items-center justify-between flex-1
          transition-all duration-300 ease-in-out z-40 gap-6 md:gap-0
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full md:opacity-100 md:translate-y-0 pointer-events-none md:pointer-events-auto"}
        `}>
          
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center flex-1 gap-1 md:gap-8 text-base md:text-sm font-semibold text-blue-950">
            <li>
              <Link href={"/"} onClick={closeMenu} className="block py-2 md:py-0 hover:text-blue-800 transition-colors">Home</Link>
            </li>
            <li>
              <Link href={"/animals"} onClick={closeMenu} className="block py-2 md:py-0 hover:text-blue-800 transition-colors">All Animals</Link>
            </li>

            <li>
              <Link href={"/profile"} onClick={closeMenu} className="block py-2 md:py-0 hover:text-blue-800 transition-colors">My Profile</Link>
            </li>


          </ul>

          {/* Authentication Section */}
          <div className="flex items-center gap-4 border-t md:border-t-0 pt-6 md:pt-0 border-amber-200">
            {!user ? (
              <ul className="flex items-center text-base md:text-sm gap-6 w-full md:w-auto justify-between md:justify-start">
                <li>
                  <Link href={"/login"} onClick={closeMenu} className="hover:text-blue-800 transition-colors font-medium text-blue-950">Login</Link>
                </li>
                <li>
                  <Link href={"/register"} onClick={closeMenu}>
                    <button className="bg-blue-950 text-white rounded-full px-6 py-2 hover:bg-blue-900 transition-all text-sm font-semibold">
                      Register
                    </button>
                  </Link>
                </li>
              </ul>
            ) : (
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
                <div className="flex items-center gap-3">
                  
                  {/* Small, neat, constrained avatar container */}
                  <div className="h-9 w-9 overflow-hidden rounded-full flex items-center justify-center border border-amber-200 flex-shrink-0">
                    <Avatar className="size-9">
                      <AvatarImage
                        alt={user?.name || "User Avatar"}
                        src={user?.image}
                        referrerPolicy="no-referrer"
                      />
                      <AvatarFallback className="bg-blue-100 text-blue-950 font-bold text-xs">
                        {user?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-blue-950 leading-tight">
                      {user?.name}
                    </span>
                    <span className="text-xs text-gray-600 md:hidden">
                      {user?.email}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={handleSignOut} 
                  className="bg-blue-950 text-white rounded-full px-4 py-3 hover:bg-blue-600 transition-all text-xs font-semibold whitespace-nowrap ml-4"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={toggleMenu}></div>
        )}

      </nav>
    </div>
  );
};

export default Navbar;