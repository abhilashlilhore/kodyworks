"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";
import Image from "next/image";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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

  const menuItems: { label: string; href?: string; dropdown?: boolean; items?: { label: string; href: string; desc?: string }[] }[] = [
    {
      label: "Home",
      dropdown: true,
      items: [
        { label: "Home 1 (Classic)", href: "/", desc: "Classic white background layout with services grid" },
        { label: "Home 2 (Animated)", href: "/index2", desc: "Animated banner with blue gradient design" },
        { label: "Home 3 (Green Theme)", href: "/index3", desc: "Green animated banner with modern layout" },
      ],
    },
    {
      label: "Services",
      dropdown: true,
      items: [
        { label: "Web Development", href: "/services/web-development", desc: "We specialize in crafting tailored web solutions, leveraging modern technologies and intuitive designs to deliver seamless, user-centric digital experiences." },
        { label: "Generative AI", href: "/services/generative-ai", desc: "AI isn't just for tech giants—it's for you. We use it to automate, analyze, and enhance your business." },
        { label: "SAP", href: "/services/sap", desc: "Transform enterprise operations with tailored SAP solutions, integrating modules across industries to streamline processes, enhance efficiency, and drive growth." },
        { label: "Mobile Development", href: "/services/mobile-app-development", desc: "An app can make your business stand out. We create ones that engage users, strengthen your brand, and drive results." },
        { label: "MVP", href: "/services/mvp-development", desc: "Launch a functional prototype quickly to gather real-world feedback, refine your product, and attract investors." },
        { label: "Staffing", href: "/services/staffing", desc: "Need talent fast? Our IT pros jump in to deliver results without the hiring headache." },
        { label: "Cloud, DevOps & Custom Integrations", href: "/services/cloud-devops-integrations", desc: "The cloud makes your business agile, cost-effective, and connected. We simplify the switch so you can reap the rewards." },
        { label: "Salesforce", href: "/services/salesforce", desc: "Unlock the full potential of your CRM with our expert Salesforce consulting, seamless implementation, and comprehensive support services." },
      ],
    },
    {
      label: "About Chase",
      dropdown: true,
      items: [
        { label: "Who We Are", href: "/about/who-we-are", desc: "Get your bearings on our values, culture, and unique approach." },
         { label: "Life At KODY Works", href: "/about/life-at-american-chase", desc: "Join a team of passionate innovators reimagining the future of work." },
         { label: "Jobs At KODY Works", href: "/about/jobs-at-american-chase", desc: "Explore opportunities that inspire, challenge, and unlock your potential." },
      ],
    },
    {
      label: "Insights",
      dropdown: true,
      items: [
        { label: "Case Studies", href: "/insights/case-studies", desc: "Explore real-world examples of our solutions in action." },
        { label: "Blogs", href: "/insights/blogs", desc: "Indelible insights and perspectives from our thought leaders on the front lines." },
      ],
    },
    { label: "Showcase", href: "/index2" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const bannerGif =
    pathname === "/index2"
      ? "/assets/kodyworks_animated_lower_banner.gif"
      : pathname === "/index3"
      ? "/assets/matrix_banner.gif"
      : null;

  const bannerAlt =
    pathname === "/index2"
      ? "Kodyworks Animated Banner"
      : pathname === "/index3"
      ? "Matrix Banner"
      : "";

  const isBannerPage = bannerGif !== null;

  return (
    <header className="header">
      {!isBannerPage && <div className="corner-light"></div>}
      {!isBannerPage && <div className="corner-dark"></div>}

      {isBannerPage ? (
        <div className="banner-full-wrapper">
          <img
            src={bannerGif}
            alt={bannerAlt}
            className="banner-full-gif"
          />
        </div>
      ) : (
        <div className="header-top">
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

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      )}

      <nav
        ref={navRef}
        className={`header-nav ${isSticky ? "header-nav-fixed" : ""} ${mobileMenuOpen ? "mobile-open" : ""}`}
      >
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`nav-item ${item.dropdown ? "has-dropdown" : ""}`}
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              {item.dropdown ? (
                <>
                  <button
                    className="nav-link dropdown-toggle"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  <ul className={`dropdown-menu ${openDropdown === item.label ? "open" : ""}`}>
                    {item.items?.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className="dropdown-link"
                          onClick={() => {
                            setOpenDropdown(null);
                            setMobileMenuOpen(false);
                          }}
                        >
                          <span className="dropdown-label">{subItem.label}</span>
                          {subItem.desc && <span className="dropdown-desc">{subItem.desc}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href!}
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
            ))}
          </ul>
        </nav>
    </header>
  );
};

export default Header;
