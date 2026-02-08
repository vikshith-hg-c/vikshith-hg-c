"use client";

import { Socials } from "@/constants";
import type { SocialLink } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  // Detect which section is in view
  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      // Only update if we're not in the middle of a click-triggered scroll
      if (scrollTimeoutRef.current) {
        return;
      }

      const sections = ["about", "skills", "experience", "projects", "education", "contact"];

      // Check from top to bottom of viewport
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active if it's in the top portion of viewport
          // Using a higher threshold to avoid jumping between sections
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Call on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click on nav links to set active immediately
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    closeMenu();

    // Prevent scroll detection from running for 1.5 seconds after click
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      scrollTimeoutRef.current = null;
    }, 1500);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">

        {/* Left: Name */}
        <div className="hidden lg:flex items-center">
          <h1 className="text-[22px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4AF626] to-cyan-500">
            Vikshith Halehalli Ganesh
          </h1>
        </div>

        {/* Middle: Desktop Navigation Links */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-6">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(sectionId);
                  // Scroll to section
                  const element = document.getElementById(sectionId);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative px-5 py-2 text-base font-semibold rounded-lg
                           transition-all duration-300 ease-out
                           transform hover:scale-105 hover:-translate-y-1
                           ${isActive
                             ? "text-[#4AF626] bg-[#4AF626]/10 border-2 border-[#4AF626]/40 backdrop-blur-sm shadow-lg shadow-[#4AF626]/40"
                             : "text-gray-300 border-2 border-white/30 bg-white/5 backdrop-blur-sm shadow-lg shadow-white/10 hover:text-[#4AF626] hover:border-[#4AF626]/30"
                           }
                           before:absolute before:inset-0 before:rounded-lg
                           before:bg-gradient-to-r before:from-white/5 before:to-transparent
                           before:opacity-0 hover:before:opacity-100 before:transition-opacity`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <>
                    {/* Green Glow for Active */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4AF626]/60 to-transparent rounded-b-lg animate-pulse"></div>
                  </>
                )}
              </a>
            );
          })}
        </div>

        {/* Right: Social Icons */}
        <div className="hidden lg:flex flex-row gap-4">
          {Socials.map((social: SocialLink) => (
            <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-between w-full">
          {/* Hamburger Menu - Left */}
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1.5 p-2"
          >
            <div className={`w-6 h-0.5 bg-[#4AF626] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-[#4AF626] transition-all ${isOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-[#4AF626] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </button>

          {/* Mobile Social Icons - Right */}
          <div className="flex gap-3">
            {Socials.map((social: SocialLink) => (
              <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}>
                <Image
                  src={social.src}
                  alt={social.name}
                  width={22}
                  height={22}
                  className="hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[65px] left-0 right-0 bg-[#03001417] backdrop-blur-md border-b border-[#7042f861] py-4">
          <div className="flex flex-col gap-4 px-4">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(sectionId);
                    // Scroll to section
                    const element = document.getElementById(sectionId);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-base py-2 font-semibold transition-colors ${
                    isActive
                      ? "text-[#4AF626] border-l-2 border-[#4AF626] pl-3"
                      : "text-gray-300 hover:text-[#4AF626]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
