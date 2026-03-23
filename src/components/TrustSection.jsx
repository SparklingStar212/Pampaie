import React from 'react'
import CBNLogo from '../assets/cbn-logo.png'
import NDICLogo from '../assets/ndic-logo.png'

const TrustSection = () => {
  return (
    <section className="trust-section">
      <h2 className="trust-main-heading">Your money's safe space</h2>
      <div className="trust-badges">
        <div className="badge-item">
          <span className="badge-text">Licenced by<br/>the CBN</span>
          <img src={CBNLogo} alt="CBN" className="badge-img-cbn" />
        </div>
        <div className="badge-item">
          <span className="badge-text">Deposits<br/>insured by</span>
          <img src={NDICLogo} alt="NDIC" className="badge-img-ndic" />
        </div>
      </div>
      
      <div className="trust-columns">
        <div className="trust-col">
          <h3>Licenced by the CBN</h3>
          <p>We are fully licensed by the Central Bank of Nigeria, so you can bank with confidence knowing your money is always in safe hands.</p>
        </div>
        <div className="trust-col">
          <h3>Reliable</h3>
          <p>We safeguard your data and funds with advanced encryption, fraud detection, and multiple authentication layers.</p>
        </div>
        <div className="trust-col">
          <h3>24/7 Support</h3>
          <p>Our customer care and fraud desk are available 24/7, with in-app reporting tools for instant support whenever you need it.</p>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
