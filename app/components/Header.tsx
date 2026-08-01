"use client";

import { useState, useEffect, useRef } from "react";
import "./Header.css";
import Image from "next/image";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const navOffsetTopRef = useRef<number>(0);

  useEffect(() => {
    const measureNavPosition = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        navOffsetTopRef.current = rect.top + window.scrollY;
      }
    };

    measureNavPosition();

    const handleScroll = () => {
      if (navRef.current) {
        setIsSticky(window.scrollY >= navOffsetTopRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="corner-light"></div>
      <div className="corner-dark"></div>
      <div className="header-top">
        {/* Logo */}

        <div className="logo-section">
          <Image
            src={logo}
            alt="KODY Works Logo"
            width={280}
            height={280}
            className="logo-image-header"
            priority
          />
        </div>

        {/* Company Info */}
        <div className="company-section">
          <h1 className="company-name">
            <span className="dark">KODY</span>
            <span className="blue">Works</span>
          </h1>

          <div className="consulting-row">
            <div className="line-one"></div>
            <h2>CONSULTING</h2>
            <div className="line-one"></div>
          </div>
          <div className="consulting-row">
            <div className="line-two"></div>
            <p className="tagline">
              Delivering Technology Solutions Worldwide
            </p>
            <div className="line-two"></div>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <nav ref={navRef} className={`header-nav ${isSticky ? "header-nav-fixed" : ""}`}>
        <a href="#hero">HOME</a>
        <span>|</span>
        <a href="#about">ABOUT</a>
        <span>|</span>
        <a href="#services">SERVICES</a>
        <span>|</span>
        <a href="#testimonials">TESTIMONIALS</a>
        <span>|</span>
        <a href="#why-choose">WHY CHOOSE</a>
        <span>|</span>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
};

export default Header;
