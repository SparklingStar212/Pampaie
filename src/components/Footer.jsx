import React from 'react'
import CBNLogo from '../assets/cbn-logo.png'
import NDICLogo from '../assets/ndic-logo.png'
import PCILogo from '../assets/PCI.png'
import NDPCLogo from '../assets/NDPC.png'
import FCCPCLogo from '../assets/fccpc.png'
import Facebook from '../assets/Facebook.png'
import XCorp from '../assets/XCorp.png'
import Instagram from '../assets/Instagram.png'
import LinkedIn from '../assets/LinkedIn.png'
import '../App.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="compliance-column">
            <div className="logo-box">
              <img src={CBNLogo} alt="Licensed by CBN" />
            </div>
            <div className="logo-box">
              <img src={NDICLogo} alt="Insured by NDIC" />
            </div>
            <div className="logo-box">
              <img src={PCILogo} alt="PCI DSS Compliant" />
            </div>
            <div className="logo-box">
              <img src={NDPCLogo} alt="NDPC" />
            </div>
            <div className="logo-box">
              <img src={FCCPCLogo} alt="FCCPC" />
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Personal</h4>
            <ul>
              <li><a href="#!">PalmPay App</a></li>
              <li><a href="#!">Transfers</a></li>
              <li><a href="#!">Bill Payment</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Business</h4>
            <ul>
              <li><a href="#!">PalmPay Business</a></li>
              <li><a href="#!">POS Terminals</a></li>
              <li><a href="#!">Business Account</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Careers</a></li>
              <li><a href="#!">Contact Us</a></li>
              <li><a href="#!">Newsroom</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#!">Help Center</a></li>
              <li><a href="#!">Fraud Awareness</a></li>
              <li><a href="#!">Security</a></li>
              <li><a href="#!">Terms & Conditions</a></li>
              <li><a href="#!">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-middle">
          <div className="copyright">
            © 2026 PalmPay. All rights reserved.
          </div>
          <div className="footer-social">
            <a href="#!" className="social-icon">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#!" className="social-icon">
              <img src={XCorp} alt="X" />
            </a>
            <a href="#!" className="social-icon">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="#!" className="social-icon">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="disclaimer-text">
            PalmPay is a mobile money operator licensed by the Central Bank of Nigeria. Deposits are insured by the NDIC. PalmPay is PCI DSS compliant and operates with the highest security standards. By using this website, you agree to our Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
