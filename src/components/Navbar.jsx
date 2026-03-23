import React from 'react'
import Logo from '../assets/palmpaie-logo.png'
import NigerianFlag from '../assets/flag-nigeria.svg'
import ArrowDown from '../assets/arrow-down.svg'
import GooglePlayBlack from '../assets/googlePlayBlack.png'
import AppStoreBlack from '../assets/appStoreBlack.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo-link"><img src={Logo} alt="Logo" className="logo" /></a>

        <div className="nav-links">
          <div className="nav-item">
            <a href="#!">Company<div className="underline"></div></a>
            <div className="dropdown-menu simple-dropdown">
              <ul>
                <li><a href="#!">About</a></li>
                <li><a href="#!">Contact</a></li>
                <li><a href="#!">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="nav-item has-mega-menu">
            <a href="#!">Personal<div className="underline"></div></a>
            <div className="dropdown-menu mega-menu personal-menu">
              <div className="mega-inner">
                <div className="mega-left">
                  <h4>PalmPay For You</h4>
                  <p>30 million users trust PalmPay to make transfer, pay bills, and shop securely.</p>
                </div>
                <div className="mega-center">
                  <div className="mega-col">
                    <a href="#!">
                      <h5>PalmPay App</h5>
                      <span>Send money, pay in-person and more</span>
                    </a>
                    <a href="#!">
                      <h5>Buy and Shop</h5>
                      <span>Pay easily at shops</span>
                    </a>
                  </div>
                  <div className="mega-col">
                    <a href="#!">
                      <h5>Send and Receive Money</h5>
                      <span>Make transfer or get paid</span>
                    </a>
                    <a href="#!">
                      <h5>Bill Payment</h5>
                      <span>Pay bill and earn cashback</span>
                    </a>
                  </div>
                </div>
                <div className="mega-right">
                  <img src={GooglePlayBlack} alt="Google Play" />
                  <img src={AppStoreBlack} alt="App Store" />
                </div>
              </div>
            </div>
          </div>

          <div className="nav-item has-mega-menu">
            <a href="#!">Business<div className="underline"></div></a>
            <div className="dropdown-menu mega-menu business-menu">
              <div className="mega-inner">
                <div className="mega-content-wrapper">
                  <div className="business-header">
                    <h4>PalmPay For Business</h4>
                    <p>Our simple, all-in-one solution for payments, banking and operations...</p>
                  </div>
                  <div className="business-cols">
                    <div className="mega-col">
                      <h5>Terminals</h5>
                      <a href="#!">POS</a>
                      <a href="#!">Pay with Transfer</a>
                    </div>
                    <div className="mega-col">
                      <h5>Payment</h5>
                      <a href="#!">Payin</a>
                      <a href="#!">Payout</a>
                    </div>
                    <div className="mega-col">
                      <a href="#!"><h5>Business Account</h5><span>All your needs in one account.</span></a>
                      <a href="#!"><h5>Management</h5><span>One-stop management suite.</span></a>
                    </div>
                    <div className="mega-col">
                      <a href="#!"><h5>Pricing</h5><span>PalmPay For Business Pricing.</span></a>
                      <a href="#!"><h5>Developers</h5><span>PalmPay For Developers.</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-item">
            <a href="#!">Impact<div className="underline"></div></a>
          </div>

          <div className="nav-item">
            <a href="#!">Newsroom<div className="underline"></div></a>
            <div className="dropdown-menu simple-dropdown">
              <ul>
                <li><a href="#!">Blog</a></li>
                <li><a href="#!">Press and Media</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-buttons">
          <button className="login-btn">Log In</button>
          <div className="country-selector-wrapper">
            <div className="country-selector">
              <img src={NigerianFlag} alt="Nigerian Flag" className="flag-icon" />
              <span>Nigeria</span>
              <img src={ArrowDown} alt="Arrow Down" className="arrow" />
            </div>
            <div className="region-dropdown">
              <p>Select Region</p>
              <ul>
                <li><a href="#!">Global</a></li>
                <li className="active"><a href="#!"><img src={NigerianFlag} alt="Nigeria" className="flag-icon" /> Nigeria</a></li>
                <li><a href="#!">Tanzania</a></li>
                <li><a href="#!">Ghana</a></li>
                <li><a href="#!">Pakistan</a></li>
                <li><a href="#!">Bangladesh</a></li>
                <li><a href="#!">Uganda</a></li>
                <li><a href="#!">Philippines</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar