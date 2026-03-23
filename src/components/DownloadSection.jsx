import React from 'react'
import GooglePlay from '../assets/googlePlay.png'
import AppleStore from '../assets/appleStore.png'
import HandImage from '../assets/test14.png'

const DownloadSection = () => {
  return (
    <section className="download-wrapper" style={{ backgroundImage: `url('https://static.chuanyinet.com/gaiaxTemplete/TopBannerBackgrounddda482b7-0e07-41.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="download-transition">
        <div className="hand-image">
          <img src={HandImage} alt="Hand holding phone" />
        </div>
        <div className="transition-content">
          <h2>Download the PalmPay app now and discover a smarter way to bank</h2>
        </div>
      </div>

      <div className="download-section">
        <div className="download-banner" style={{ backgroundImage: `url('https://palmpay.com/_next/static/media/footerBg.e4fed23a.png')` }}>
          <div className="download-text">
            <h2>Join <strong>40 million</strong> users who love PalmPay</h2>
          </div>
          <div className="store-buttons white-btns">
            <div className="btn-wrapper"><img src={GooglePlay} alt="Google Play" /></div>
            <div className="btn-wrapper"><img src={AppleStore} alt="Apple Store" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection
