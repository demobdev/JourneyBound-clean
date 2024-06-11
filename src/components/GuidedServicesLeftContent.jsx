import React from "react";
import { Container, Row, Col, Image, Ratio } from "react-bootstrap";
import JourneyboundTriangleImage from "../assets/images/triangle-down-bg-image.png";
import DiscordImage from "../assets/images/discord-logo.png";
import BlueBaseLogo from "../assets/images/blue-base-logo.png";
import Video from "../assets/videos/guided-services-video-clip.mp4";

const BackgroundImage = {
  backgroundImage: `url(${JourneyboundTriangleImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function GuidedServicesLeftContent() {
  return (
    <section>
      <Container fluid>
        <Row>
          <Col lg={6} style={BackgroundImage} className="p-0">
            <div
              className="d-flex flex-column text-center justify-content-between align-items-center h-100 w-100 mx-auto"
              style={{
                maxWidth: "634px",
                paddingBlock: "62px",
                minHeight: "720px",
              }}
            >
              <h4
                className="head-h4 font-family-ElementalEnd fw-normal mb-0"
                style={{ lineHeight: "46px", letterSpacing: "0.21em" }}
              >
                receive the role of Shaman in The Atrium's discord to qualify
                eligibility
              </h4>
              <a href="https://discord.com/invite/the-atrium">
                <Image
                  style={{ marginRight: "30px", marginBottom: "50px" }}
                  src={DiscordImage}
                  width={85}
                />
              </a>
              <div className="mt-4">
                <h4 className="fw-normal font-family-ElementalEnd mb-4">
                  Journeybound <br /> On
                </h4>
                <div>
                  <Image style={{marginRight: '1rem'}} src={BlueBaseLogo} width={140} />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="p-0 overflow-hidden video-column">
            {/* <Ratio aspectRatio={"1x1"} className="h-100 recieve-shamon"> */}
            <video
              autoPlay
              muted
              loop
              className="bg-video"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                opacity: "0.6",
                transform: "scaleX(1)",
              }}
            >
              <source src={Video} type="video/mp4" />
            </video>
            {/* </Ratio> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GuidedServicesLeftContent;
