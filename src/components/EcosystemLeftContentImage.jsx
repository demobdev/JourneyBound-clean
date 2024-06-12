import React, { useEffect } from "react";
import { Container, Row, Col, Image, Figure } from "react-bootstrap";
import BgImage from "../assets/images/experience-the-polygenic.png";
import ecoSystemContentImage from "../assets/images/polygeic-journey-quest.jpeg";

const contentBackgroundImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function EcosystemLeftContentImage() {
  useEffect(() => {
    const mainContainer = document.querySelector('.main-container');
    const scrollableContents = document.querySelectorAll('.scrollable-content');

    let lastScrollTop = 0;

    const handleScroll = () => {
      let scrollTop = mainContainer.scrollTop;
      let scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
      lastScrollTop = scrollTop;

      scrollableContents.forEach((content) => {
        let maxScrollTop = content.scrollHeight - content.clientHeight;

        if (scrollDirection === 'down' && content.scrollTop < maxScrollTop) {
          content.scrollTop += 10; // Adjust the scroll step as needed
        } else if (scrollDirection === 'up' && content.scrollTop > 0) {
          content.scrollTop -= 10; // Adjust the scroll step as needed
        }
      });
    };

    mainContainer.addEventListener('scroll', handleScroll);

    return () => {
      mainContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-container">
      <section id="polygeneric">
        <Container fluid>
          <Row className="gx-0">
            <Col lg={6} className="scrollable-content">
              <div className="polygenic-background-image">
                <div
                  className="content-wrapper w-100 mx-auto py-4 py-lg-5"
                  style={{ maxWidth: "560px" }}
                >
                  <div className="mb-4">
                    <h6 className="head-h6 font-family-AG fw-500 mb-4 text-center">
                      Experience The Polygenic <br /> Journey Worlds
                    </h6>
                    <div className="text-center">
                      <a
                        href="#"
                        className="btn free-mint-btn primary-btn w-100"
                        style={{
                          maxWidth: "376px",
                          backgroundColor: "rgb(125 44 254 / 48%)",
                          boxShadow: "#7D2CFE",
                        }}
                      >
                        free mint
                      </a>
                    </div>
                    <h5 className="head-h5 fw-normal mt-4 mb-0 text-center">
                      Accessible only through a JourneyBound Account NFT
                    </h5>
                  </div>
                  <h6
                    style={{ color: "#C7A5AF", marginTop: "65px" }}
                    className="head-h6 mb-4 text-center"
                  >
                    JourneyBound's First Integrated Sub-Collection
                  </h6>
                  <h6 className="head-h6 mb-4">
                    Step into the heart of the JourneyBound ecosystem and
                    discover an exclusive collection of 8 interdimensional
                    worlds. Each carefully crafted with inspiration from actual
                    states of altered consciousness, these Polygenic Journey
                    NFTs are available for minting directly within your
                    JourneyBound Account NFT on Base. Embark on an exploration
                    of realms filled with depth, mystery, and enchantment:
                    Exclusive Reward: The first 20 collectors to secure all 8
                    Polygenic Journey worlds will receive a FREE guided
                    psilocybin journey at Brain Brew PDX, our licensed service
                    center partner in Oregon.
                  </h6>
                  <Row>
                    <Col>
                      <ul className="text-list">
                        <li>Samadhi</li>
                        <li>Oneness</li>
                        <li>Angelic Realm</li>
                        <li>Ancient Worlds</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul className="text-list">
                        <li>Endarkenment</li>
                        <li>Sacred Earth</li>
                        <li>Liminality</li>
                        <li>Omniverse</li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </div>
              <Figure className="my-4 text-center w-100">
                <Image src={ecoSystemContentImage} className="w-100 mx-0 w-full" />
              </Figure>
              <h6 className="head-h6 mb-4">
                Exclusive Reward: The first 20 collectors to secure all 8
                Polygenic Journey worlds will receive a FREE guided psilocybin
                journey at Brain Brew PDX, our licensed service center partner
                in Oregon.
              </h6>
            </Col>
            <Col lg={6} className="p-0 image-column overflow-hidden">
              <Image src={BgImage} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default EcosystemLeftContentImage;

