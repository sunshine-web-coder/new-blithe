import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/footer-logo.svg";
import bg from "./footer-bg.png";
import appstore from "../../assets/app-store.svg";
import googleplay from "../../assets/google-play.svg";

// Social Icons
import socialTwitter from "../../assets/social/twitter.svg";
import socialTelegram from "../../assets/social/telegram.svg";
import socialDiscord from "../../assets/social/discord.svg";
import socialYoutube from "../../assets/social/youtube.svg";
import socialInstagram from "../../assets/social/instagram.svg";
import socialMedium from "../../assets/social/medium.svg";

const Footer = () => {
  const data = {
    menu: [
      {
        name: "Privacy policy",
        path: "/privacy-policy",
      },
      {
        name: "Terms of service",
        path: "/terms-of-service",
      },
      {
        name: "Documentation",
        path: "https://blithe.gitbook.io/blithe-wallet-whitepaper",
      },
      {
        name: "Request form",
        path: "/form",
      },
      {
        name: "Disclaimer",
        path: "/disclaimer",
      },
      {
        name: "Support",
        path: "mailto:support@blithewallet.com",
      },
      {
        name: "Audit",
        path: "https://github.com/interfinetwork/smart-contract-audits/blob/audit-updates/Blithe_AuditReport_InterFi.pdf",
      },
    ],
    social: [
      {
        name: "Twitter",
        icon: socialTwitter,
        path: "https://twitter.com/BlitheWallet?t=SLPAHTN62XbHX5CWSjk8BQ&s=09",
      },
      {
        name: "Telegram",
        icon: socialTelegram,
        path: "https://t.me/blithewallet",
      },
      {
        name: "Discord",
        icon: socialDiscord,
        path: "https://discord.gg/RFcu94Nu",
      },
      {
        name: "Youtube",
        icon: socialYoutube,
        path: "https://youtube.com/channel/UCIEZNs84cnGGwv34wYJQfEw",
      },
      {
        name: "Instagram",
        icon: socialInstagram,
        path: "https://www.instagram.com/blithewallet",
      },
      {
        name: "Medium",
        icon: socialMedium,
        path: "https://medium.com/@blithewallet",
      },
    ],
  };
  return (
    <footer className="footer position-relative pt-6 pb-5">
      <img src={bg} className="footer__shape img-fluid" alt="Footer BG" />
      <Container>
        <Row className="mb-5 gy-4 justify-content-center">
          <Col lg="6">
            <div className="footer-widget text-center">
              <div className="mb-4">
                <div className="mb-3 mb-lg-4 mb-xl-5">
                  <img src={logo} className="img-fluid" />
                </div>
                <div className="fs-md fs-md-2xl">
                  First non-custodial multi chain Wallet to offer NFC Payment,
                  stake and buy crypto assets..No KYC needed!
                </div>
              </div>

              <div className="get-the-app mb-lg-5">
                <h5 className="fw-bold mb-4 text-dark fs-4xl">Get the app</h5>
                <div className="d-inline-flex gap-3">
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=com.blithe.wallet.blithewallet">
                    <img
                      className="img-fluid"
                      src={googleplay}
                      alt="Google Play Store"
                    />
                  </a>
                  <div className="MhhY">
                    <span>Coming soon</span>
                    <img className="img-fluid" src={appstore} alt="App Store" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {data && data.menu && (
              <div className="footer-widget">
                <ul className="list-inline d-flex flex-wrap justify-content-center fs-md fs-lg-xl gap-2 gap-lg-4">
                  {data.menu.map((item, i) => (
                    <li key={i} className="list-inline-item">
                      <a href={item.path}
                        className="link-dark text-black fw-medium"
                      >
                        {item.name}{" "}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      <hr className="my-4" />

      <Container>
        <Row className="gy-4 flex-md-row-reverse text-center text-md-start">
          {data && data.social && (
            <Col md="auto">
              <ul className="list-inline mb-0 d-inline-flex flex-wrap gap-2 gap-lg-3">
                {data.social.map((item, i) => (
                  <li key={i} className="list-inline-item">
                    <a target="_blank" href={item.path}>
                      <img src={item.icon} alt={item.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          )}
          <Col>
            <div className="fw-regular">
              © 2022 Blithe Inc. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
