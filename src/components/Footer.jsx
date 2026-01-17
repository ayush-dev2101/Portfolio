import { Container, Row, Col } from "react-bootstrap";
// import { Contact } from "./Contact"; // <- new Contact section
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer
      className="footer py-5"
      style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Contact / Newsletter Section */}
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <h5>Get In Touch / Subscribe For Connection</h5>
          </Col>

          {/* Logo Section */}
          <Col
            // xs={12}
            // lg={3}
            className="mb-4 mb-lg-0 text-center text-lg-start"
          >
            <span className="footer-logo">PORTFOLIO</span>
          </Col>

          {/* Social Icons Section */}
          <Col xs={12} lg={3} className="text-center text-lg-end">
            <div className="social-icon mb-2">
              <a
                href="https://www.linkedin.com/in/ayush-kumar-singh-308b70296"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/ayush-dev2101"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/max_ayushhh/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p className="mb-0" style={{ fontSize: "14px" }}>
              © {new Date().getFullYear()}. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
