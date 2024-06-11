import { React } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../assets/css/footer.css";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import Logo from "../assets/images/JB_white.png";

function Footer() {
  return (
    <Router>
      <footer className="footer">
        <Container fluid="lg">
          <Row>
            <Col lg={3} className="footer-logo text-center mb-lg-0 mb-3">
              <Link to="/">
                <Image src={Logo} alt="Footer Logo" width={175} />
              </Link>
            </Col>
            <Col lg={9}>
              <Row>
                <Col lg={8} md={7} className="p-md-0 menu-column">
                  <h4 className="head-h4 font-family-AG text-center">
                    stay connected
                  </h4>
                  <ul className="social-media-list list-unstyled justify-content-center">
                    <li>
                      <a href="https://twitter.com/JourneyBoundNFT">
                        <i class="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://discord.gg/the-atrium">
                        <i class="fa-brands fa-discord"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/theatriumlca/">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <h3 className="title">
                    Join the Journey
                  </h3>
                </Col>
                <Col lg={4} md={5} className="p-md-0 menu-column">
                  <h4 style={{paddingLeft:"35px"}} className="head-h4 font-family-AG text-center text-md-start">LEGAL</h4>
                  <ul className="list-unstyled footer-menu">
                    <li onClick={()=>{window.location.href="/legal"}}>
                      <a>
                      Disclaimer
                      </a>
                    </li>
                    <li onClick={()=>{window.location.href="/legal"}}>
                      <Link  to="/legal">Terms of Use</Link>
                    </li>
                    <li>
                      <Link to="/">Purchase Agreement</Link>
                    </li>
                    <li>
                      <Link to="/">Licensing Agreement</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
              <div className="copyright">
                <p className="text">
                    Copyright © 2024 the Atrium, LCA | All rights reserved
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </Router>
  );
}

export default Footer;
