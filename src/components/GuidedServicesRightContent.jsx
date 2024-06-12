import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import BrainBrewLogo from "../assets/images/brain-brew-logo.png";
import ContentBgImage from "../assets/images/guided-services-bg.png";
import Video from "../assets/videos/guided-services-video.mp4";

const contentBackgroundImage = {
  backgroundImage: `url(${ContentBgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const GuidedServicesRightContent = () => {
  return (
    <section className="guidedServices-right-content-video text-center">
      <Container fluid>
        <Row>
          <Col
            lg={6}
            className="p-0 overflow-hidden video-column position-relative"
          >
            <h2
              className="head-h2 fw-normal font-family-AG position-absolute top-0 start-50 translate-middle-x mt-lg-5 mt-4"
              style={{ zIndex: 2 }}
            >
              Guided Services
            </h2>
            <video
              autoPlay
              muted
              loop
              className="bg-video"
              style={{
                width: "100%",
                height: "100%",
                opacity: "0.6",
                minHeight: "552px",
              }}
              playsInline
            >
              <source src={Video} type="video/mp4" />
            </video>
          </Col>
          <Col
            lg={6}
            className="scrollable-content"
            style={contentBackgroundImage}
          >
            <div
              className="content-wrapper mx-auto w-100 py-lg-5 py-4"
              style={{ maxWidth: "600px" }}
            >
              <h3 className="head-h3 mb-0">
                The Atrium has partnered with Brain Brew PDX to offer real life
                psilocybin sessions for the Polygenic Journey experience of
                JourneyBound
              </h3>
              <a href="https://www.brainbrewpdx.com/" className="d-block brainbrewpdx">
                <Image src={BrainBrewLogo} className="w-100" />
              </a>
              <h3 className="head-h3 mb-0">
                The Atrium has partnered with Brain Brew PDX to offer real life
                psilocybin sessions for the Polygenic Journey experience of
                JourneyBound
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GuidedServicesRightContent;
