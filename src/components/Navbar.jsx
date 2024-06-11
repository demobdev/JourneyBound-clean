import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../assets/css/navbar.css";

function Header() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    setShow(false)
  },[location])

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[location.pathname]);
  
  return (
    <>
      <Navbar expand="lg">
        <Container fluid="lg">
          <Navbar.Brand className="d-none d-lg-block">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </Navbar.Brand>
          <div className="d-flex align-items-center justify-content-between nav-main-menu w-100">
            <Button className="navbar-toggler" onClick={handleShow}>
              <i class="fa-solid fa-bars"></i>
            </Button>
            <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex">
              <Nav className="w-100 justify-content-lg-end">
                <Link to="/ecosystem" className={`nav-link ${location.pathname === '/ecosystem' ? 'active' : ''}`}>
                  Ecosystem
                </Link>
                <Link to="/guided-services" className={`nav-link ${location.pathname === '/guided-services' ? 'active' : ''}`}>
                  Guided Services
                </Link>
                <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                  Dashboard
                </Link>
                <Link to="/connect-wallet" className={`nav-link ${location.pathname === '/connect-wallet' ? 'active' : ''}`}>
                  Connect Wallet
                </Link>
                <Link to="/mint-now" className="btn nav-link">
                  Mint Now
                </Link>
              </Nav>
            </Navbar.Collapse>
            <Link to="/mint-now" className="mobile-navlink-btn d-inline-block d-lg-none">
                Connect Wallet
            </Link>
          </div>
        </Container>
        <Offcanvas show={show} onHide={handleClose} className="navbar-mobile">
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ecosystem" className={`nav-link ${location.pathname === '/ecosystem' ? 'active' : ''}`}>
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/guided-services" className={`nav-link ${location.pathname === '/guided-services' ? 'active' : ''}`}>
                  Guided Services
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/connect-wallet" className={`nav-link ${location.pathname === '/connect-wallet' ? 'active' : ''}`}>
                  Connect Wallet
                </Link>
              </li>
              <li>
                <Link to="/mint-now" className="btn nav-link">
                  Mint Now
                </Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
}

export default Header;