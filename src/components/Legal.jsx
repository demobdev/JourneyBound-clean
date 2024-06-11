import React from "react";
import { Row, Container, Col, Figure, Image, Accordion } from "react-bootstrap";

const Legal = () => {
  return (
    <div className="container">
      <div className="legalWrapper">
        <p>LEGAL</p>
        <Accordion className="faq-accordion" defaultActiveKey="0">
          <Row style={{marginBottom:"100px",marginTop:"50px"}}>
            <Col xl={12}>
              <Accordion.Item
                style={{
                  marginTop: "20px",
                  fontFamily: "Avenir",
                  textAlign: "start",
                }}
                eventKey={"0"}
              >
                <Accordion.Header style={{ fontFamily: "Avenir" }}>
                  Risk Disclaimer
                </Accordion.Header>
                <Accordion.Body>
                  About Risks and Volatility Please consider the following risk
                  factors (many of which are specific and inherent to
                  cryptographic and non-fungible tokens) before using any part
                  of our website/platform and before participating, purchasing
                  and/or trading JourneyBound Account non-fungible tokens (NFTs)
                  or integrated sub-collection NFTs or any other cryptographic
                  token which we, The Atrium, LCA, (or any third-party service
                  provider accessed through our platform) may offer through our
                  website/platform from time to time (“ NFTs”). The value of the
                  NFTs as well as your ability to access and transfer NFTs could
                  be materially and adversely affected if any of these risk
                  factors materialize. As a result, when you mint and purchase
                  NFTs you expose yourself to considerable risk and potential
                  financial losses. Please also note that this Risk Statement is
                  not exhaustive. You should carry out further research (and
                  seek professional advice) to carefully determine whether
                  purchasing and/or trading NFTs is suitable for your particular
                  financial situation and risk tolerance. WE SHALL NOT BE LIABLE
                  FOR ANY LOSS INCURRED BY YOU RESULTING FROM YOUR ACCESS TO OUR
                  PLATFORM OR FROM YOUR PURCHASE, TRANSFER OR USE OF
                  NON-FUNGIBLE TOKENS. NFTS ARE COMMODITY ASSETS AND YOU SHOULD
                  NEVER USE FUNDS THAT YOU CANNOT AFFORD TO LOSE TO PURCHASE
                  NFTS. 1. PRICE VOLATILITY The price of NFTs can be subject to
                  dramatic valuations due to the rapid shifts in offer and
                  demand resulting from events such as but not limited to: (a)
                  good or bad publicity, (b) changes in the financial technology
                  industry, (c) technological advancement, (d) market trends,
                  (e) general economic and/or political conditions, (f) degree
                  of adoption, (g) degree of institutional support, (h)
                  regulatory measures, (i) degree of government support, (l)
                  market dynamics, (m) trading activities, (n) hacking, and (o)
                  events affecting large service providers, including exchanges.
                  AS A RESULT OF PRICE VOLATILITY, YOUR NFTS MAY LOSE ALL VALUE
                  AND BECOME WORTHLESS. WE SHALL NOT BE RESPONSIBLE FOR ANY LOSS
                  INCURRED BY YOU AS A RESULT OF THE INHERENT PRICE-VOLATILITY
                  OF NFTS. 2. CRYPTOGRAPHIC WALLETS NFTs are stored on
                  cryptographic wallets ("Wallets"). A private key (for example,
                  a passphrase) is usually necessary to access, control and/or
                  dispose of tokens that are stored in your Wallet. Losing
                  access to the private key(s) associated with your Wallet may
                  result in the permanent loss of your ability to access and
                  dispose of your tokens. You are solely responsible for
                  implementing all reasonable and appropriate measures for
                  securing access to your private key(s) and Wallet. WE DO NOT
                  PROVIDE ANY WALLET SERVICES OR PRODUCTS. WE SHALL NOT BE
                  RESPONSIBLE FOR ANY LOSS RESULTING FROM YOUR INABILITY TO
                  ACCESS YOUR WALLET AND/OR PRIVATE KEYS. 3. PROTOCOLS NFTs are
                  recorded on distributed ledgers (typically shared across
                  networks of users) which are governed by, subject to, and
                  distinguished on the basis of certain set of rules known as
                  protocols. In addition to distributed ledgers, secondary and
                  third-party managed exchange networks also operate protocols
                  integrated with requisite distributed ledgers. 3.1
                  Malfunction, breakdown and/or abandonment of protocols Any
                  malfunction, breakdown, and/or abandonment of the protocols
                  (and of any consensus mechanism, where applicable) on which
                  the NFTs are based could severely affect the price of the NFTs
                  as well as your ability to dispose of the NFTs (particularly
                  where the protocol relies on substantial participation and
                  wide networks to operate properly). 3.2 Mining attacks Some
                  protocols integrate consensus-based mechanisms for the
                  validation of transfers (“Consensus Protocols”). Consensus
                  Protocols are, therefore, susceptible to attacks at the stage
                  of validation, where token transactions are approved by the
                  network. This may affect the accuracy of transactions
                  occurring on the protocol, and transfer mechanisms of your
                  NFTs. 3.3 Hacking and security weaknesses NFTs may be subject
                  to expropriation and/or theft. Bad actors (including hackers,
                  groups, and organizations) may attempt to interfere with the
                  protocols (such as Ethereum Virtual Machine software and token
                  interfaces) or the smart contracts in a variety of ways,
                  including, but not limited to, malware attacks, denial of
                  service attacks, consensus-based attacks, sybil attacks,
                  smurfing and spoofing. Furthermore, some protocols are based
                  on open-source software and, as a result, subject to the risk
                  of weakness being introduced to the protocols (either
                  willingly or accidentally) at the development stage. Any such
                  weakness may be exploited by bad actors for the purposes of
                  misappropriating your NFTs, or otherwise affect the
                  functionality of the protocol and of your ability to dispose
                  of your NFTs. WE DO NOT HAVE CONTROL OVER THE PROTOCOLS. AS
                  SUCH, WE SHALL NOT BE RESPONSIBLE FOR ANY LOSS ARISING OUT OF
                  OR IN CONNECTION WITH THE PROTOCOLS. 4. LAWS AND REGULATIONS
                  The legal and/or regulatory framework surrounding NFTs and
                  distributed ledger technology is uncertain, not harmonized,
                  and unsettled in many jurisdictions. It is difficult to
                  predict what framework will become applicable to NFTs in the
                  near future and how the implementation of dedicated legal
                  and/or regulatory frameworks will affect the value and
                  utilization of NFTs. A newly introduced legal and regulatory
                  framework may interfere with or otherwise limit your ability
                  to hold or dispose of your NFTs, which in turn could result in
                  a financial loss on your part. WE ARE NOT RESPONSIBLE FOR ANY
                  LOSS WHICH YOU MAY SUFFER AS A RESULT OF ANY NEWLY INTRODUCED
                  LEGAL AND/OR REGULATORY FRAMEWORK. 5. TAXATION The tax
                  characterization of NFTs is complex and largely uncertain. The
                  uncertainty in the tax treatment of NFTs may expose you to
                  unforeseen future tax consequences associated with purchasing,
                  owning, selling or otherwise using NFTs. You should seek tax
                  advice to understand what tax obligations apply to you when
                  purchasing, holding, transferring, and utilizing NFTs. Failure
                  to comply with your tax obligations could result in severe
                  fines and even jail time. WE ARE NOT RESPONSIBLE FOR ANY LOSS
                  OR OTHER FORM OF LIABILITY ARISING OUT OF OR IN CONNECTION
                  WITH YOUR FAILURE TO COMPLY WITH ANY TAX LIABILITY THAT IS OR
                  WILL BE APPLICABLE TO YOU. 6. UNANTICIPATED RISKS In addition
                  to the risks included in this document, there are other risks
                  associated with your purchase, holding, trading, and use of
                  NFTs, some of which we cannot anticipate. Such risks may
                  further materialize as unanticipated variations or
                  combinations of the risks discussed in this section. THIS RISK
                  STATEMENT IS NOT EXHAUSTIVE AND SHALL NOT BE TAKEN TO
                  ENCOMPASS ALL RISKS INVOLVED IN THE PURCHASE, HOLDING, TRADING
                  AND USE OF NON-FUNGIBLE TOKENS. WE SHALL NOT BE RESPONSIBLE OR
                  LIABLE FOR ANY LOSS SUFFERED BY YOU AS A RESULT OF
                  UNANTICIPATED RISKS.
                </Accordion.Body>
              </Accordion.Item>
            </Col>
            <Col xl={12}>
              <Accordion.Item
                style={{
                  marginTop: "40px",
                  fontFamily: "Avenir",
                  textAlign: "start",
                }}
                eventKey={"0"}
              >
                <Accordion.Header
                  style={{
                  
                    // marginBottom: "94px",
                    fontFamily: "Avenir",
                  }}
                >
                  PRIVACY POLICY
                </Accordion.Header>
                <Accordion.Body >
                  Last Updated: 15 April, 2024 This Privacy Policy describes the
                  types of information The Atrium LCA, together with our
                  affiliates and assigns (collectively, “we” or “The Atrium”)
                  collect on the Platforms (defined below), how we use such
                  information and to whom and under what circumstances we may
                  disclose it. This Privacy Policy applies to our various
                  websites, including but not limited to journeybound.io (the
                  “Site”), our applications, and our use of social media sites
                  (collectively, the “Platforms”), and any other personal
                  information obtained when you communicate or interact with The
                  Atrium. By accessing the Platforms on any computer, mobile
                  phone, tablet, or other device (collectively, “Device”),
                  making a purchase from The Atrium, or otherwise interacting
                  with The Atrium, you understand and agree that collection and
                  use of your personal information will be made in accordance
                  with this Privacy Policy, our Terms of Use, and any other
                  policies incorporated therein, available at
                  https://www.journeybound.io. If you do not agree with any part
                  of this Privacy Policy, please discontinue use of the
                  Platforms or engaging with The Atrium immediately. We will
                  update this Privacy Policy when necessary to reflect changes
                  to our Platforms. When we post changes to this Privacy Policy,
                  we will revise the “last updated” date at the top of the
                  Privacy Policy. If there are material changes to the Privacy
                  Policy or in how The Atrium will use your personal data, we
                  will use reasonable efforts to notify you either by
                  prominently posting a notice of such changes before they take
                  effect or by sending you a notification directly. We encourage
                  you to periodically review this Privacy Policy to learn how
                  The Atrium is protecting your information. PLEASE READ THE
                  FOLLOWING PRIVACY POLICY CAREFULLY BY CLICKING “I ACCEPT,” OR
                  BY ACCESSING OR USING THE SITE, YOU AGREE THAT YOU HAVE READ
                  AND UNDERSTOOD, AND, AS A CONDITION TO YOUR USE OF THE SITE,
                  YOU AGREE TO BE BOUND BY THE FOLLOWING PRIVACY POLICY.
                  Information That You Give Us Category of Personal Information
                  Collected Source Purpose for Collection Categories of
                  Recipients Contact information: such as name, address, phone
                  number, wallet address, non-fungible token number, and Discord
                  registered user information. From our customers when they
                  visit the Platforms, call us, mint/purchase from the
                  Platforms, redeem patronage dividends; sign-up for emails or
                  another service, or otherwise interact with us. To communicate
                  with and respond to our customers and members about the
                  products and/or services we sell or the work we do for them,
                  including verification of identify or to meet legal
                  obligations. If you opt-in, we may share this information with
                  select sponsors, information technology, or other service
                  providers and partners. Browsing information: such as IP
                  address, MAC address or other device identifier, wallet
                  address and wallet identifiers, the kind of browser or
                  computer used, pages and content that you visit on the
                  Platforms, what you click on, geolocation information from
                  which you access the Our Platforms and your interactions with
                  the Platforms, including through the use of cookies and other
                  tracking technologies explained further below. To evaluate
                  usage of the Platforms and improve performance and our
                  Services; to protect the security and integrity of the
                  Platforms and our business, such as preventing fraud, hacking,
                  and other criminal activity or to meet legal obligations. Our
                  service providers who help us with fraud protection and
                  website analytics. Platforms, date and time of your visit, and
                  web pages you linked to our Platforms from. Payment
                  information: name, card issuer and card type, credit or debit
                  card number, expiration date, CVV code, and billing address;
                  cryptocurrency wallet address, cryptocurrency wallet type,
                  cryptocurrency wallet balances. From our users and their
                  payment issuers or suppliers. Authorizing of credit card and
                  other financial transactions for our users. Our service
                  providers who process payments for us – they are prohibited
                  from using personal information for any other purposes outside
                  of their terms of use and are contractually required to comply
                  with all applicable laws and requirements, which includes the
                  Payment Card Industry Data Security standards. Suspected crime
                  information: details of your identity, image, name and
                  address, suspected or alleged thefts, fraud, assault or other
                  criminal behavior. From crime and fraud prevention agencies,
                  from you, witnesses and from the police. To protect customers,
                  the public and our business against risks and crime. Law
                  enforcement and other governmental authorities in accordance
                  with applicable law, and our professional advisors. In some
                  jurisdictions, individuals may have the right to opt-in or
                  withdraw consent for certain uses. If you reside in such
                  jurisdictions, you may have additional rights which are
                  detailed below, “Access, Correction and Deletion.” Information
                  We Collect Automatically When you visit the Platforms, we may
                  collect certain information from you and how you interact with
                  the Platforms, including your Internet Protocol (IP) address,
                  MAC address, browser type, operating system,
                  device-identifying information, the specific web pages visited
                  during your connection, and the domain name from which you
                  accessed the Platforms. In addition, we may collect
                  information about your browsing behavior, such as the date and
                  time you visit the Platforms, the areas or pages of the
                  Platforms that you visit, the amount of time you spend viewing
                  the Platforms, the number of times you return to the Platforms
                  and other clickstream data. If you do not want us to collect
                  information about your geographic location, you must disable
                  the technology that transmits this information. We may also
                  use non-personal or aggregated information for statistical
                  analysis, research, and other purposes. Like many commercial
                  websites, we analyze how visitors use our Platforms through
                  what is known as "cookie" technology or similar tracking
                  tools. A cookie is a small text file that is placed on your
                  computer when you access the Platforms and allows us to
                  recognize you each time you visit the Platforms. We may use
                  cookies to: (1) allow you to use the Platforms without having
                  to re-enter your username and password; (2) enhance or
                  personalize your Site usage and shopping experience; (3)
                  monitor Site usage; (4) manage the Platforms; and (5) improve
                  the Platforms and our products and services. If you choose,
                  you can set your browser to reject cookies or you can manually
                  delete individual cookies or all of the cookies on your
                  computer by following your browser’s help file directions.
                  However, if your browser is set to reject cookies or you
                  manually delete cookies, you may have some trouble accessing
                  and using some of the pages and features that are currently on
                  our Platforms, or that we may put on our Platforms in the
                  future. Note that browser-management tools for cookies are
                  outside of our control and we cannot guarantee their
                  effectiveness. If you continue to use the Platforms without
                  changing your settings, you consent to our use of cookies and
                  other tools on the Platforms. We may combine the information
                  we collect through cookies, web beacons, or other technology
                  tools with other information we have collected from you or
                  information from other sources. Strictly Necessary Cookies
                  These cookies are necessary for the website to function and
                  cannot be switched off in our systems. They are usually only
                  set in response to actions made by you which amount to a
                  request for services, such as setting your privacy
                  preferences, logging in or filling in forms. You can set your
                  browser to block or alert you about these cookies, but some
                  parts of the Platforms may then not work properly. These
                  cookies do not store any personally identifiable information.
                  Performance Cookies These cookies allow us to count visits and
                  traffic sources so we can measure and improve the performance
                  of the Platforms. They help us to know which pages are the
                  most and least popular and see how visitors move around the
                  Platforms. All information these cookies collect is aggregated
                  and therefore anonymous. If you do not allow these cookies we
                  will not know when you have visited the Platforms and will not
                  be able to monitor its performance. Functional Cookies These
                  cookies enable the Platforms to provide enhanced functionality
                  and personalization. They may be set by us or by third party
                  providers whose services we have added to our pages. If you do
                  not allow these cookies, then the Platforms may not function
                  properly. Targeting Cookies These cookies may be set through
                  the Sites or Platforms by our advertising partners. They may
                  be used by those companies to build a profile of your
                  interests and show you relevant adverts on other sites. These
                  cookies uniquely identify your browser and device. If you do
                  not allow these cookies, you will experience less targeted
                  advertising. Use of Information We may use the information we
                  collect from and about you for any of the following purposes:
                  (1) to fulfill your requests for products; (2) to respond to
                  your inquiries; (3) to send you a confirmation email when you
                  make a purchase; (4) to review Site usage and operations; (5)
                  to address problems with the Platforms, our business or our
                  services; (6) to protect the security or integrity of the
                  Platforms and our business; (7) to monitor the Platforms for
                  compliance with our Terms of Use and the law; and (8) to
                  contact you with Site updates, newsletters and other
                  informational and promotional materials from us and third
                  party marketing offers from our trusted partners, as well as
                  from other companies. If you sign up for our mailing list, we
                  will send you informational emails about offers of services.
                  At any time, you can ‘unsubscribe’ yourself from our email
                  list simply by clicking the ‘unsubscribe’ button. If you do
                  not wish to receive communications from us about special
                  offers and promotions, you can opt-out of receiving these
                  communications by following the instructions contained in the
                  messages you receive. Even if you opt-out of receiving these
                  messages, we reserve the right to send you certain
                  communications relating to the services we provide, and we may
                  send you service announcements and administrative messages. We
                  do not offer you the opportunity to opt-out of receiving those
                  communications. Disclosure of Information We may disclose
                  information collected from and about you as follows: (1) to
                  our related companies and service providers, to perform a
                  business, professional or technical support function for us;
                  (2) ONLY IF YOU OPT-IN: to our sponsors, partners, or other
                  third parties, who may contact you with their own offers (3)
                  as necessary if we believe that there has been a violation of
                  the Terms of Use or of our rights or the rights of any third
                  party; (4) to respond to legal process (such as a search
                  warrant, subpoena or court order) and provide information to
                  law enforcement agencies or in connection with an
                  investigation on matters related to public safety, as
                  permitted by law, or otherwise as required by law; and (5) in
                  the event that our assets or substantially all of its assets
                  are acquired, your personal information may be one of the
                  transferred assets provided such assets are subject to
                  substantially the same terms as are set forth in this Privacy
                  Policy. We may also disclose your personal information with
                  your express consent. We may share aggregate, non-personally
                  identifiable information about our users with third parties.
                  Please note that if you voluntarily submit any personal
                  information for posting on the Platforms, such as a review or
                  any comments, the information becomes publicly available and
                  can be collected and used by others, so you should use care
                  before posting information about yourself online. Retention of
                  Personal Information Personal information that we collect,
                  access or process will be retained only as long as necessary
                  for the fulfillment of the purposes for which it was
                  collected, unless otherwise provided in agreements between you
                  and The Atrium or as required or authorized by law. Personal
                  information that is no longer required to fulfill the
                  identified purposes will be destroyed, erased, or made
                  de-identified. Security We maintain reasonable and appropriate
                  measures designed to maintain information we collect in a
                  secure manner. We have taken certain physical, electronic, and
                  administrative steps to safeguard and secure the information
                  we collect from visitors to the Platforms. Even though we
                  follow reasonable procedures to try to protect the information
                  in our possession, no security system is perfect and we cannot
                  promise, and you should not expect, that your information will
                  be secure in all circumstances. Children The Platforms are not
                  directed to children, nor do we knowingly collect any personal
                  information from children under the age of thirteen without
                  verifiable parental consent. If you believe that a child has
                  provided personal information to us, please contact us
                  promptly as described below, and we will endeavor to
                  investigate and delete such information from our systems.
                  Third Party Websites The Platforms may contain links to
                  third-party websites, such as social media sites like Discord
                  and Twitter, which may have privacy policies that differ from
                  our own. We are not responsible for the activities and
                  practices that take place on these websites. Accordingly, we
                  recommend that you review the privacy policy posted on any
                  external site before disclosing any personal information.
                  Please contact those websites directly if you have any
                  questions about their privacy policies. Changes to This
                  Privacy Policy We may change this privacy policy from time to
                  time, including as required to keep current with rules and
                  regulations, new technologies and security standards. When we
                  do, we will post the change(s) on our Platforms. If we change
                  the policy in a material and retroactive manner, we will
                  provide appropriate notice to you. Your California Privacy
                  Rights California law permits our customers who are California
                  residents to request certain information about our disclosure
                  of personal information to third parties for their own direct
                  marketing purposes during the preceding calendar year. This
                  request is free and may be made once a year. To make such a
                  request, please write to us at the following address: 3900 E.
                  Mexico Ave. Suite 300 Denver, CO 80210- Attention: Privacy
                  Officer Or email: support@atrium.earth If you are a California
                  resident, California law provides you with the following
                  rights with respect to your personal information: · The right
                  to know the categories or specific personal information we
                  have collected, used, disclosed and sold about you. To submit
                  a request to know, you may email support@atrium.earth. You
                  also may designate an authorized agent to make a request for
                  access on your behalf. · The right to request that we delete
                  any personal information we have collected about you. To
                  submit a request for deletion, you may email
                  support@atrium.earth. You also may designate an authorized
                  agent to make a request for deletion on your behalf. When you
                  exercise these rights and submit a request to us, we will
                  verify your identity. We also may use a third-party
                  verification provider to verify your identity. Your exercise
                  of these rights will have no adverse effect on the price and
                  quality of our products or services. For the 12-month period
                  prior to the date of this Privacy Policy, The Atrium has not
                  sold any personal information about its users; nor does it
                  have any plans to do so in the future. Visitors from Outside
                  the United States—Cross-Border Transfer The Platforms and your
                  personal information are hosted in the United States. If you
                  are visiting the Platforms from outside the United States,
                  your information may be transferred to, stored and processed
                  in the United States or other countries in accordance with
                  this Privacy Policy. The data protection and other applicable
                  laws of the United States or other countries may not be as
                  comprehensive as those laws or regulations in your country or
                  may otherwise differ from the data protection or consumer
                  protection laws in your country. Your information may be
                  available to government authorities under lawful orders and
                  law applicable in such jurisdictions. Also, we may transfer
                  your data from the United States to other countries or regions
                  in connection with storage and processing of data, fulfilling
                  your requests, and operating the Platforms. By providing any
                  information, including personal information, on or to the
                  Platforms, you consent to such transfer, storage, and
                  processing. By using the Platforms and/or providing personal
                  information to us, you consent to transfer of your information
                  to our facilities as described in this Privacy Policy. How to
                  Access and Control Your Personal Information You have the
                  right to access, correct, and delete your personal information
                  that you shared with us on our Platforms or through other
                  written or oral means. We are committed to keeping your
                  personal information accurate and up to date. However, it is
                  up to you to update it with any changes. You may notify us via
                  the information in the “Contact Us” section below to request
                  access to, or to correct any personal information that you
                  have provided to us. We may not accommodate a request to
                  delete or change information if we believe the change would
                  violate any law or legal requirement or cause the information
                  to be incorrect. If you no longer wish to have your personal
                  information processed, you may request to delete such data,
                  subject to certain limitations, by contacting us as described
                  below. Contact Us If you have questions or concerns about this
                  Privacy Policy or how we collect and use the information of
                  our customers and users, you can contact our designated
                  Privacy Officer at: 3900 E. Mexico Ave. Suite 300 Denver, CO
                  80210- Attention: Privacy Officer Or email:
                  support@atrium.earth If we need, or are required, to contact
                  you concerning any event that involves your information, we
                  may do so by email or mail.
                </Accordion.Body>
              </Accordion.Item>
            </Col>
          </Row>
        </Accordion>
      </div>
    </div>
  );
};

export default Legal;
