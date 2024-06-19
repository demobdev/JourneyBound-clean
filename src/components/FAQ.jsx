import React from "react";
import { Row, Container, Col, Accordion } from "react-bootstrap";
import BackgroundImage from "../assets/images/FAQ-bg-image.png";

function FAQ() {
  const SectionBGImage = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="py-5 faq-section" style={SectionBGImage}>
        <Container fluid="lg">
          <Row className="mb-4 align-items-center">
            <Col lg={6} className="mb-3 mb-lg-0">
              <h2 className="title font-family-ElementalEnd fw-normal text-center mb-0">
                FAQ
              </h2>
            </Col>
            <Col lg={6}>
              <h2 className="head-h1 font-family-Avenir fw-normal text-center mb-0">
                Frequently Asked Questions
              </h2>
            </Col>
          </Row>
          <Accordion className="faq-accordion" defaultActiveKey="">
            <Row>
              <Col lg={6}>
                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="0"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      What is JourneyBound?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    An extension of The Atrium, JourneyBound offers a world to
                    explore token-bound account (ERC-6551) functionality that
                    expands real-world and legal medicinal psychedelic access.
                    JourneyBound consists of the primary and unlimited
                    JourneyBound Account collection, which is offered for free
                    (minus network minting and transfer fees), and continuous
                    sub-integrated bound NFT collections that fuse psychedelic
                    artwork with in-real-life medicinal psychedelic therapy.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="1"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      What are JourneyBound Accounts (NFTs)?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    JourneyBound Accounts are token-bound account-enabled
                    (ERC-6551) NFTs that, when minted, provide access to the
                    psychedelic sub-NFT collection journeys. Limited to one per
                    wallet address, JourneyBound Accounts are wallets, owned
                    by your minting/holding wallet, that custody the
                    sub-integrated bound NFT collections. JourneyBound Accounts
                    are access keys and wallet NFTs into the psychedelic
                    exclusive ecosystem. There are unlimited JourneyBound
                    Accounts that are offered for free to provide humanity the
                    expansive view into this psychedelic token-bound universe.
                    By minting a JourneyBound NFT, you agree to our terms and
                    conditions.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="2"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      What is the Polygenic Journey NFT Collection?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Beginning with the Polygenic Journey NFT collection
                    integrated directly into the JourneyBound Account ecosystem,
                    the Polygenic Journey NFT collection brings to life unique
                    custom artwork from psychedelic traveled realms within
                    JourneyBound Accounts. Polygenic Journeys are 0.015 ETH to
                    mint and the collection size is 25,000.
                    <br />
                    <br />
                    Be in the first 20 to mint or hold all eight Polygenic Journey
                    NFTs and become eligible to receive a FREE guided
                    psychedelic journey at a licensed psilocybin journey in
                    Portland, Oregon.
                    <br />
                    <br />
                    Inside the JourneyBound Account, access the eight
                    interdimensional realms of the Polygenic Journeys:
                    <ol>
                       <li><b>Samadhi</b></li>
                       <li><b>Oneness</b></li>
                       <li><b>Angelic Realm</b></li>
                       <li><b>Ancient World</b></li>
                       <li><b>Endarkenment</b></li>
                       <li><b>Sacred Earth</b></li>
                       <li><b>Liminality</b></li>
                       <li><b>Omniverse</b></li>
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="3"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      Will there be more sub-integrated NFT collections inside
                      JourneyBound?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    YES! JourneyBound is a systemic token-bound orbital
                    ecosystem. Once the Polygenic Journey NFT collection mints
                    out, the team will launch a new sub-integrated bound NFT
                    collection for JourneyBound Account holders. Each collection
                    will access a real-world legal psychedelic project
                    throughout the United States in regulated jurisdictions.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="4"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      Who qualifies to earn a free and legally guided psilocybin
                      journey?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    The first 20 people who hold all eight Polygenic Journey NFT
                    worlds qualify. Make sure you join The Atrium’s Discord
                    server to get the assigned roles based on your holdings.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="5"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      I hold all eight Polygenic Journey NFT worlds! Now what?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Go to The Atrium’s Discord ASAP! Once you hold all eight
                    Polygenic Journey NFT worlds, connect your wallet holding
                    the JourneyBound Account to the CollabLand bot and receive
                    the role of Shaman. If you are in the first 20 people to
                    receive the Shaman role, congratulations! You have received
                    eligibility for a free psilocybin journey at our partner’s
                    licensed service center: Brain Brew PDX in Portland, Oregon.
                    Our team will connect with you and guide you through the
                    next steps from here.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="6"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      How do I trade, transfer, or sell Polygenic Journey NFTs?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Two ways! Foremost, make sure you're on the Base network.
                    <ol>
                      <li>
                        <b>Directly on the JourneyBound platform.</b> Simply transfer
                        the Polygenic Journey NFTs inside the JourneyBound
                        Account to the desired wallet address. The platform only
                        supports direct transfers, not purchasing or selling.
                      </li>
                      <li>
                        <b>OpenSea.</b> We have deployed both the JourneyBound NFT and
                        the Polygenic Journey NFT contracts to OpenSea to
                        maximize transfer options with purchasing and selling
                        options. Note that JourneyBound NFTs are ERC-6551 and
                        this functionality is not yet supported by most
                        third-party NFT marketplaces, including OpenSea. You
                        will only be able to access the functionality of the
                        JourneyBound Account on the platform-connected site.
                      </li>
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>
              </Col>
              <Col lg={6}>
                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="7"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      What blockchain is JourneyBound on?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Base. Please ensure your wallet is connected to the Base
                    network, an L2 Ethereum blockchain, with ETH in your wallet
                    to cover gas, minting, and transfers.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="8"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      What are the limited edition JourneyBound Organics?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    200 of the total JourneyBound Account NFTs are the
                    JourneyBound Organics. If you mint one of these, you will
                    receive five FREE Polygenic Journey NFTs (250 MATIC
                    value) AND, five FREE NFTs per future sub-collection in
                    the JourneyBound ecosystem. Holding a JourneyBound Organic
                    offers a perpetual unique perk of ongoing value.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="9"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      Where are the Polygenic Journey NFTs assigned upon mint?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    In your JourneyBound account. JourneyBound accounts are ERC-6551 enabled, meaning these NFTs can also custody assets within the JourneyBound ecosystem.
                    Each JourneyBound account NFT comes with a blockchain registered address on Base and functions like a wallet within your wallet.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="10"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      Wait, psychedelics are legal? Where does JourneyBound operate?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Sure are. JourneyBound operates only in the U.S. for now.
                    More U.S. States are establishing legalization guidance for
                    psychedelic therapy. Our projects only operate in regulated
                    environments, such as in Oregon under Measure 109 and
                    Colorado under Proposition 122.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="11"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      If I hold all rarity NFTs, do I have to participate in a psilocybin journey?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Absolutely not. Undergoing a psychedelic journey is a
                    calling and should be thoroughly considered, planned, and
                    discussed with family, friends, and/or licensed physicians.
                    If either, 1) you do not want a psilocybin journey or 2) you
                    are ineligible due to health risks, you are encouraged to
                    trade Polygenic Journey NFT collectibles within the
                    JourneyBound Account ecosystem. Feel free to set the MATIC
                    price you want, you earned it!.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="12"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      What Discord roles are available?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="role-item"><b>Journeyer:</b> (wallet holding the JourneyBound NFT)</div>
                    <div className="role-item"><b>Psychonaut:</b>  (wallet holding the JourneyBound NFT which holds five of the eight Polygenic Journey NFT worlds)</div>
                    <div className="role-item"><b>Shaman:</b>  (wallet holding the JourneyBound NFT which holds all eight of the eight Polygenic Journey NFT worlds)</div>
                    <div className="role-item"><b>Mystical StarHolder:</b>  (wallet holding the StarHolder NFT, the JourneyBound NFT, and five+ of the eight Polygenic Journey NFT worlds)</div>
                    <div className="role-item"><b>Master StarHolder:</b>  (wallet holding the StarHolder NFT, the JourneyBound NFT, and all eight Polygenic Journey NFT worlds).</div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item
                  style={{
                    marginTop: "20px",
                    fontFamily: "Avenir",
                    textAlign: "start",
                  }}
                  eventKey="13"
                >
                  <Accordion.Header className="custom-accordion-header">
                    <div className="question-text">
                      Can I send other NFTs or tokens to my JourneyBound Account?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    No. JourneyBound will only support functionality from within
                    the ecosystem. Any Web3 assets outside of the JourneyBound
                    ecosystem will not be retrievable. Please ONLY send/transfer
                    sub-integrated collections or approved assets to
                    JourneyBound Accounts.
                  </Accordion.Body>
                </Accordion.Item>
              </Col>
            </Row>
          </Accordion>
        </Container>
      </section>
      <div className="py-3">
        <Container>
          <div className="divider"></div>
        </Container>
      </div>
    </>
  );
}

export default FAQ;
