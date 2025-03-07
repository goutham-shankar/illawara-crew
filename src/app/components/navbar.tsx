"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import elvlogo from '../Assets/elvllog.png'
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"} 
        py-3 px-6`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image src={elvlogo} width={100} height={40} alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </nav>

          {/* Theme Toggle & Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpenMenu(true)}
            >
              <RxHamburgerMenu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under navbar */}
      

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6"
          >
            {/* Close Button */}
            <button className="self-end p-2" onClick={() => setOpenMenu(false)}>
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Mobile Nav Links */}
            <nav className="mt-6 space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setOpenMenu(false)}>Home</Link>
              <Link href="/about" className="block text-gray-700 hover:text-blue-600" onClick={() => setOpenMenu(false)}>About</Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-600" onClick={() => setOpenMenu(false)}>Services</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600" onClick={() => setOpenMenu(false)}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
