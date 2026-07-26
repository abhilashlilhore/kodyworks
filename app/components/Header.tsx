import "./Header.css";
import Image from "next/image";
import logo from "../assets/logo.jpeg";

const Header = () => {
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
            className="logo-image"
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
      <nav className="header-nav">
        <span>IT CONSULTING</span>
        <span>|</span>
        <span>SOFTWARE DEVELOPMENT</span>
        <span>|</span>
        <span>PROJECT MANAGEMENT</span>
        <span>|</span>
        <span>AI SOLUTIONS</span>
      </nav>
    </header>
  );
};

export default Header;