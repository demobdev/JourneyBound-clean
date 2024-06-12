import React from "react";
import { Container, Figure, Image } from "react-bootstrap";
import BannerVideo from "../assets/videos/EyeofJourneyBound.mp4";
import JBWhiteImage from "../assets/images/JB_white.png";
import BaseLogo from "../assets/images/base-logo.png";
import AtriumLogo from "../assets/images/Atrium-logo.png";

function Banner() {
  return (
    <section className="banner-main position-relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls={false} // Ensure this is set to false
        className="fullscreen-bg__video"
      >
        <source src={BannerVideo} type="video/mp4" />
      </video>
      <Container fluid="lg" className="d-flex flex-column align-items-center justify-content-center text-center">
        <Figure className="mb-5 hero-logo">
          <Image src={JBWhiteImage} className="image jb-logo" />
        </Figure>
        <div className="hero-text-wrapper">
          <h1 className="title font-family-AG">
            a web3 psychedelic experience
          </h1>
          <div className="brand-logo">
            <div className="logo-container text-center">
              <h4 className="shortTitle">on</h4>
              <Figure className="mb-0">
                <Image src={BaseLogo} className="image1" />
              </Figure>
            </div>
            <div className="logo-container text-center">
              <h4 className="shortTitle">by the</h4>
              <Figure className="mb-0">
                <Image src={AtriumLogo} className="image2" />
              </Figure>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Banner;

