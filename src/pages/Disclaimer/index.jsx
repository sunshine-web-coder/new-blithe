import React from "react";
import PrimaryLayout from "../../layouts/PrimaryLayout";
import "./disclaimer.scss";

const Disclaimer = () => {
  return (
    <PrimaryLayout>
      <div className="Disclaimer">
        <div className="banner">
          <img src="https://iili.io/Zhlb4a.md.jpg" alt="pBanner" />
        </div>
        <div className="title">Disclaimer</div>
        <div className="contt">
              <p>
              The primary goal of this whitepaper is to provide extensive information on Blithe Wallet—its products and services. 
              </p>
              <p>
              No part of this document is intended to offer financial advice, security, investment solicitation, or any offer to sell any product, item, or asset—digital or otherwise. 
              </p>
              <p>With that said, the details contained in this documentation may not be up to date or meet the intended industry dynamics. There is, also, no binding agreement that guarantees all the information in this document to be accurate or complete.</p>
              <p>The information contained in this document is the sole property of Blithe Wallet. However, Blithe Wallet will not be held responsible for citations from third-party sources, or for accuracy and completeness of information from these third-party sources. </p>
              <p>This whitepaper is open to further proofreading and community debates, as information could likely change with the dynamics of the industry. </p>
              <p>Furthermore, this whitepaper should not be misread to offer the Blithe Token (BLT) for sale, or solicit funds, in a way possible, from the finance team. </p>
              <p>You're entitled to your opinions of this whitepaper, and should carry out due diligence on whatever you perceive doable on this whitepaper, as no part of this whitepaper is legally enforceable or soliciting a legally-backed action.</p>
            </div>
      </div>
    </PrimaryLayout>
  );
};

export default Disclaimer;
