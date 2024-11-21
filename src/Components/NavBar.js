"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Camps", path: "/camping" },
  { name: "Rentals", path: "/rentals" },
  { name: "Gallery", path: "/gallery" },
  // { name: "About Us", path: "/about-us" },
  // { name: "Contact Us", path: "/contact-us" },
];

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <button
            type="button"
            onClick={() => navigate("/")} // Navigate to the home page
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">SKAdventures</span>
            <img
              alt="logo"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Desktop login button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <button
            onClick={() => handleNavigation("/login")}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </button> */}
        </div>
      </nav>

      {/* Mobile Menu (Dialog) */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              {/* Uncomment and add login link in mobile if needed */}
              {/* <div className="py-6">
                <button
                  onClick={() => handleNavigation("/login")}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </button>
              </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}


