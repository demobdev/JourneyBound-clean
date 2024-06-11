import React from "react";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import VideoBanner from "../assets/videos/TheOpening.mp4";
import BackgroundImage from "../assets/images/why-journey-bound.png";
import { Link } from "react-router-dom";
import "../assets/css/global-style.css";
import "../assets/css/style.css";

function WhyJourneyBound() {
  const SectionBackgroundImage = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <section className="why-journey-bound position-relative overflow-hidden" style={SectionBackgroundImage}>
      <video
        autoPlay
        muted
        loop
        playsInline
        controls={false} // Ensure this is set to false
        className="fullscreen-bg__video"
      >
        <source src={VideoBanner} type="video/mp4" />
      </video>
      <Container fluid="lg" className="d-flex flex-column align-items-center justify-content-center text-center">
        <div className="d-flex flex-wrap flex-md-nowrap mb-md-5 mb-4 align-items-end">
          <h4 className="title head-h4 font-family-AG mb-0 fw-normal me-0 me-md-3">Why JourneyBound?</h4>
          <div className="divider d-block d-md-none my-3"></div>
          <h5 className="head-h5 font-family-Avenir fw-normal mb-0">
            Zero Cost Entry: Begin your journey without any minting fees (minus gas)
          </h5>
        </div>
        <div className="contentWrapper">
          <Link to="/ecosystem" className="highlight-link">
            <h6 className="head-h6 font-family-AG mb-md-4 mb-3 fw-normal">Exclusive Access:</h6>
          </Link>
          <h5 className="head-h5 font-family-Avenir fw-normal mb-0">
            Experience the JourneyBound ecosystem, opening doors for continuous real-life legal psychedelic therapy and digital rarity collectibles.
          </h5>
          <div className="divider"></div>
          <Link to="/ecosystem#polygeneric" className="highlight-link">
            <h6 className="head-h6 font-family-AG mb-md-4 mb-3 fw-normal">Be Among the Web3 Pyschonauts:</h6>
          </Link>
          <h5 className="head-h5 font-family-Avenir fw-normal mb-0">
            Early JourneyBound Account NFT holders can purchase and mint from the 8 diverse psychedelic-inspired dimensions, each crafted and inspired from real-life psychedelic journeys: Polygenic Journey NFT worlds, minting at 0.015 ETH on Base.
          </h5>
          <div className="divider"></div>
          <Link to="/guided-services" className="highlight-link">
            <h6 className="head-h6 font-family-AG mb-md-4 mb-3 fw-normal">Become Eligible for a Psychedelic Journey:</h6>
          </Link>
          <h5 className="head-h5 font-family-Avenir fw-normal mb-0">
            Qualify by being one of the first 20 holders to collect all 8 of Polygenic Journey NFT worlds. Check out our partner's licensed psilocybin service center location.
          </h5>
          <div className="divider"></div>
          <h6 className="head-h6 font-family-AG mb-md-4 mb-3 fw-normal">Support Legal Psychedelics:</h6>
          <h5 className="head-h5 font-family-Avenir fw-normal mb-0">
            Your participation promotes the legal and responsible use of psychedelics, supported by Web3 innovations.
          </h5>
        </div>
      </Container>
    </section>
  );
}

export default WhyJourneyBound;
