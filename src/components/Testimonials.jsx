import React from 'react'
import Avatar1 from '../assets/image112.png'
import '../App.css'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>Loved by 40 million users</h1>
      <p className="test-subheading">
        Join millions of users who are enjoying seamless and reliable payments across Nigeria. Here's what some of them have to say.
      </p>

      <div className="test-cards">
        <div className="test-card">
          <div className="user-info-top">
            <img src={Avatar1} alt="Olamide Michael Olatunji" className="avatar-img" />
            <div className="user-details">
              <h4>Olamide Michael Olatunji</h4>
            </div>
          </div>
          <div className="stars-row">
            <span className="blue-stars">★★★★★</span>
            <small>June 5, 2026</small>
          </div>
          <p>
            PalmPay is simply the best when it comes to smooth transactions! The transfers are always fast, and the cashbacks are totally worth it! Not to mention their customer service is top notch.
          </p>
        </div>

        <div className="test-card">
          <div className="user-info-top">
            <div className="avatar">A</div>
            <div className="user-details">
              <h4>Anna</h4>
            </div>
          </div>
          <div className="stars-row">
            <span className="blue-stars">★★★★★</span>
            <small>May 28, 2026</small>
          </div>
          <p>
            From data bundles to paying my electricity bills, PalmPay makes everything easy. Honestly can't imagine my daily life without this app now. Highly recommended to everyone.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
