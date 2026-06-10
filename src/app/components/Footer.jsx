"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      {/* Structural Separator */}
      <div className="mt-12 h-px w-full" />

      {/* FIXED: Changed background wrapper to match your amber theme */}
      <div className="absolute inset-0 -z-10 bg-amber-50" />

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-tr 
        from-amber-500/5 via-transparent to-blue-500/5 
        blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Brand & About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/icon.webp"
                alt="QurbaniHat logo"
                width={50}
                height={50}
                className="object-cover h-10 w-10"
              />
              <h2 className="text-xl font-black tracking-tight text-blue-950">
                QurbaniHat
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-700 max-w-xs">
              <strong>About Us:</strong> QurbaniHat is your premier digital marketplace dedicated to making your sacrificial animal shopping seamless, safe, and transparent. Buy healthy, certified animals from verified sellers with unmatched convenience and discounts.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-bold text-blue-950 mb-4 tracking-wide uppercase">
              Marketplace
            </h3>
            <ul className="space-y-3 text-sm font-medium text-gray-700">
              <li>
                <Link href="/" className="hover:text-blue-900 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/animals" className="hover:text-blue-900 transition">
                  All Animals
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-900 transition">
                  Login 
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-sm font-bold text-blue-950 mb-4 tracking-wide uppercase">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex flex-col">
                <span className="text-xs font-bold text-gray-500">Email Support</span>
                <a href="mailto:support@qurbanihat.com" className="hover:text-blue-900 transition font-medium">
                  support@qurbanihat.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-gray-500">Hotline Hours</span>
                <span className="font-medium text-gray-800">Sat - Thu (9 AM - 8 PM)</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-gray-500">Corporate Office</span>
                <span className="font-medium text-gray-800">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social Links & Call To Action */}
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-bold text-blue-950 mb-3 tracking-wide uppercase">
                Follow Us
              </h3>
              {/* SVG Social Icons */}
              <div className="flex items-center gap-4 text-blue-950">
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition" aria-label="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 12.991 22 12z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition" aria-label="X (Twitter)">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition" aria-label="YouTube">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.113C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.505a3.003 3.003 0 0 0-2.11 2.113C0 8.033 0 12 0 12s0 3.967.502 5.837c.277 1.036 1.091 1.849 2.11 2.113 1.87.505 9.388.505 9.388.505s7.518 0 9.388-.505a3.003 3.003 0 0 0 2.11-2.113C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
                bg-blue-950 text-white text-sm font-semibold transition-all duration-200 
                hover:bg-blue-900 hover:scale-[1.02] hover:shadow-md"
              >
                Find Your Animal
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Horizontal Divider Line */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-600">
          <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-blue-950 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-950 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;