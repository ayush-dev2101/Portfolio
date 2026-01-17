import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/linkedIn.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add navbar shadow/animation
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (section) => {
    setActiveLink(section);
    const el = document.getElementById(section.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand
          onClick={() => handleNavClick("Home")}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="me-auto">
            {["Home", "Skills", "Projects"].map((link) => (
              <Nav.Link
                key={link}
                className={
                  activeLink === link ? "active navbar-link" : "navbar-link"
                }
                onClick={() => handleNavClick(link)}
              >
                {link}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon mb-2">
              <a
                href="https://www.linkedin.com/in/ayush-kumar-singh-308b70296"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={navIcon1}
                  alt="LinkedIn"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a
                href="https://github.com/ayush-dev2101"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={navIcon2}
                  alt="GitHub"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a
                href="https://www.instagram.com/max_ayushhh/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={navIcon3}
                  alt="Instagram"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>

            <button onClick={() => handleNavClick("Contact")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
