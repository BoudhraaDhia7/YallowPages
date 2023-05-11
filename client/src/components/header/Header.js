import React, { useEffect } from "react";
import { Link } from "react-scroll";

const Header = (props) => {
  useEffect(() => {
    const selectHeader = document.querySelector("#header");
    if (selectHeader) {
      const handleScroll = () => {
        window.scrollY > 90
          ? selectHeader.classList.add("sticked")
          : selectHeader.classList.remove("sticked");
      };
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src={globe} alt="" /> */}
          <h1>Globo</h1>
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link
                className="header-link"
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className="header-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Qui somme nous
              </Link>
            </li>
            <li>
              <Link
                className="header-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="header-link get-a-quote"
                activeClass="active"
                to="quote"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                S'inscrire
              </Link>
            </li>
          </ul>
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
};

export default Header;
