import React from 'react';
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import JourneyBoundDashboard from "../assets/images/Journey-beyond-dashboard.png";
import BlueBaseLogo from "../assets/images/blue-base-logo.png";
import OmniverseVideo from "../assets/videos/Omniverse.mp4";
import OmniverseVerticalDivider from "../assets/images/vertical-divider.png";
import Moon from '../assets/images/shineMoon.png'
import BaseAbs from '../assets/images/baseImg.png'
function DashBoardAccess () {
  return (
    <section className="omniverse-section position-relative overflow-hidden">
        <Image className="d-none d-lg-block position-absolute top-0 left-0 h-100 ms-2 ms-xl-4 py-3" src={OmniverseVerticalDivider} width={45} />
        <video autoPlay muted loop className="position-absolute top-0 left-0 w-100 h-100 bg-video">
          <source src={OmniverseVideo} type="video/mp4" />
        </video>
        <Container fluid="lg" className="ps-lg-5">
          <h4 className="head-h5 font-family-AG fw-normal mb-4 text-center text-lg-start">The JourneyBound Ecosystem</h4>
          <h5 className="head-h5 font-family-Avenir fw-normal mb-1">JourneyBound is an expansion of <a href="https://atrium.earth/">The Atrium</a>.</h5>
          <div className='blending-web3-dashboard' style={{position:"relative"}}>
          <h5  className="head-h5  font-family-Avenir fw-normal mb-1">Blending Web3 token bound (ERC6551) technology with legal real world access to psychedelic therapy</h5>
          <img  src={Moon} alt="" />
          </div>
          <Row className="mt-4 mb-3 align-items-center">
            <Col xl={8} lg={7} className="mb-5 mb-lg-0">
              <Figure className="mb-0">
                <Image src={JourneyBoundDashboard} className="w-100" />
              </Figure>
            </Col>
            <Col xl={4} lg={5} className="text-center mb-4 mb-lg-0">
              <a href="#" style={{backgroundColor:"#7D2CFE",boxShadow:"#7D2CFE"}}className="btn free-mint-btn primary-btn">Dashboard Access</a>
              <h5 className="head-h5 font-family-Avenir fw-normal mt-4 mb-0">Web3 Meets <br /> Psychedelic Exploration</h5>
              <div style={{position:"relative"}}>
              <Image src={BlueBaseLogo} width={150} style={{marginTop:"50px"}} className="mt-4 mt-lg-5" />
              <img className='base-abs-Img' src={BaseAbs} alt='baseImg'/>
              </div>
            </Col>
          </Row>
          <h4 className="head-h4 font-family-Avenir fw-normal mb-0">
            Starting with the Polygenic Journey NFT integrated sub-collection, JourneyBound will
            continuously expand to include new experiences and partnerships, fostering a community of
            legal psychedelic exploration.
          </h4>
        </Container>
      </section>
  )
}

export default DashBoardAccess
