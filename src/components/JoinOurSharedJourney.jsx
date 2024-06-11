import React from "react";
import { Container, Image } from "react-bootstrap";
import JoinOurSharedImage from "../assets/images/join-our-shared-bg.png";
import AtriumLogo from "../assets/images/Atrium-logo.png";


function JoinOurSharedJourney() {
  return (
    <>
      <section
        className="simple-brew-section join-our-shared-section py-5"
      >
        <Container className="d-flex justify-content-between flex-column h-100 align-items-center w-100">
            <a
              href="#"
              style={{
                backgroundColor: "rgb(125 44 254 / 52%)",
                boxShadow: "#7D2CFE",
                maxWidth: "500px",
              }}
              className="btn free-mint-btn primary-btn"
            >
              free mint
            </a>
            <p className="title fw-normal mb-lg-0 mb-4 mt-4 text-center">
              Join our shared journey guided by safety, knowledge, immersion,
              and <br />
              transformative experiences.
            </p>
            <div className="web-spacer" />
            <h4 className="head-h4 font-family-AG fw-normal mb-4 d-block d-lg-none text-center">
              a Web3 psychedelic experience
            </h4>
            <h4 className=" head-h4 font-family-AG fw-normal mb-4 d-none d-lg-block">
              a Web3 psychedelic experience
            </h4>
            <div className="mobile-spacer" />
            <h6 className="head-h6 font-family-AG mb-3">By The</h6>
            <a href="https://atrium.earth/">
              <Image src={AtriumLogo} width={320} />
            </a>
        </Container>
      </section>
    </>
  );
}

export default JoinOurSharedJourney;
