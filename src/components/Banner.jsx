import React, { useEffect } from "react";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import BannerVideo from "../assets/videos/EyeofJourneyBound.mp4";
import JBWhiteImage from "../assets/images/JB_white.png";
import BaseLogo from "../assets/images/base-logo.png";
import AtriumLogo from "../assets/images/Atrium-logo.png";

function Banner() {
  useEffect(() => {
    const videoElement = document.querySelector(".fullscreen-bg__video");
    if (videoElement) {
      const preventFullscreen = (event) => {
        event.preventDefault();
      };

      videoElement.addEventListener("webkitfullscreenchange", preventFullscreen);
      videoElement.addEventListener("mozfullscreenchange", preventFullscreen);
      videoElement.addEventListener("fullscreenchange", preventFullscreen);

      return () => {
        videoElement.removeEventListener("webkitfullscreenchange", preventFullscreen);
        videoElement.removeEventListener("mozfullscreenchange", preventFullscreen);
        videoElement.removeEventListener("fullscreenchange", preventFullscreen);
      };
    }
  }, []);

  return (
    <section className="banner-main position-relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="fullscreen-bg__video"
        playsInline
      >
        <source src={BannerVideo} type="video/mp4" />
      </video>
      <Container
        fluid="lg"
        className="d-flex flex-column align-items-center justify-content-center text-center"
      >
        <Figure className="mb-5 jb-logo">
          <Image src={JBWhiteImage} className="image jb-logo" />
        </Figure>
        <h1 className="title font-family-AG">
          a web3 psychedelic experience
        </h1>
        <Row className="brand-logo align-items-center justify-content-between mt-4 w-100">
          <Col className="text-left">
            <h4 className="shortTitle">on</h4>
            <Figure className="mb-0">
              <Image src={BaseLogo} className="image1" />
            </Figure>
          </Col>
          <Col className="text-right">
            <h4 className="shortTitle">by the</h4>
            <Figure className="mb-0">
              <Image src={AtriumLogo} className="image2" />
            </Figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
