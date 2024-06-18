import React from "react";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import ContentImage from "../assets/images/JourneyBoundContentImage.png";

import AnimationImage1 from "../assets/images/Ghost_Inner_Peace.png";
import AnimationImage2 from "../assets/images/Derrumbes_Spirituality.png";
import AnimationImage3 from "../assets/images/Inca_stargazer_Dimensional_connection.png";
import AnimationImage4 from "../assets/images/Cambodian_Vitality.png";
import Slider from "react-slick";
import "../assets/css/slider.css";
function HomeLeftContentImage() {
  const ColumnBGImage = {
    backgroundImage: `url(${ContentImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="homeLeftContentImage">
        <Container fluid>
          <Row>
            <Col
              lg={6}
              style={ColumnBGImage}
              className="py-4 py-md-5 text-center d-flex align-items-center justify-content-center"
            >
              <div>
                <div className="mb-4">
                  <h3 className="subTitle head-h3 font-family-Clash-Display-Variable fw-500 mb-3 text-uppercase">
                    JourneyBound
                  </h3>
                  <h4 className="head-h4 font-family-Banshee-Pilot fw-normal purple-color text-uppercase">
                    psychedelic experience
                  </h4>
                </div>
                <a
                  href="#"
                  className="btn free-mint-btn primary-btn font-family-ElementalEnd fw-normal"
                  style={{ backgroundColor: "rgb(125 44 254 / 40%)" }}
                >
                  free mint
                </a>
                <h6
                  className="head-h6 font-family-Avenir fw-normal mb-0"
                  style={{ marginTop: "40px" }}
                >
                  Mint your free JourneyBound Account NFT Now! <br /> 1 PER
                  WALLET ADDRESS
                </h6>
                <div className="divider"></div>
                <h6 className="head-h6 font-family-AG fw-normal mb-0">
                  Take the First <br /> Step Into New
                </h6>
                <h6 className="head-h6 font-family-AG fw-normal mb-0">
                  Dimensions of Consciousness
                </h6>
                <div className="divider"></div>
                <h4 className="head-h4 font-family-Avenir fw-normal mb-0 light-white mb-3">
                  Experience a Web3 Psychedelic Journey with
                </h4>
                <h2
                  className="head-h2 font-family-AG fw-normal text-uppercase"
                  style={{ wordBreak: "break-all" }}
                >
                  journeybound
                </h2>
              </div>
            </Col>
            <Col lg={6} className="p-0 home-slider">
              <Slider
                style={{ width: "100%" }}
                {...{
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  arrows: false,
                }}
              >
                <Image src={AnimationImage1} />
                <Image src={AnimationImage2} />
                <Image src={AnimationImage3} />
                <Image src={AnimationImage4} />
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4">
        <Container fluid="lg">
          <h2 className="head-h2 font-family-Avenir fw-normal mb-0 text-center">
            Join the Web3 Psychedelic Revolution
          </h2>
        </Container>
      </section>
    </>
  );
}

export default HomeLeftContentImage;
