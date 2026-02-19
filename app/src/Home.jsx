import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
   const images = [
  "/images/pawn1.png",
  "/images/unnamed (1).png",
  "/images/unnamed (2).png",
  "/images/unnamed.png",
];


const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, [images.length]);



  return (
  <>
    <header>
      <img
        src="/images/unnamed.jpg"
        alt="Capitalyn Logo"
        className="logo"
      />
      <div className="title">CAPITALYN</div>
      <div className="subtitle">
        Digital Pawn & Asset Management System
      </div>
    </header>

    <nav className="module-nav">
      <a href="#about">About Us</a>
      <a href="#customers">Customer Management</a>
      <a href="#assets">Asset Valuation</a>
      <a href="#loans">Loan Management</a>
      <a href="#payments">Payment Tracking</a>
      <a href="#reports">Reports & Analytics</a>
      <a href="#support">Support & Contact</a>
    </nav>

    <div className="slideshow-container">
  <img
    src={images[currentSlide]}
    alt="slide"
    className="slides"
  />
</div>



    <section className="about" id="about">

      <h2>About Us</h2>
     <p>
      Capitalyn is a next-generation Digital Pawn and Asset Management Platform
      designed to revolutionize how financial institutions, pawn brokers, and lenders
      manage assets and loans. We combine technology and financial intelligence
      to simplify day-to-day operations — making it easier to handle customer data,
      evaluate asset values, and monitor repayments with transparency and trust.
    </p>

    <p>
      Our goal is to bridge the gap between traditional pawn management and the digital era.
      With automated workflows, real-time analytics, and scalable features, Capitalyn helps
      every organization — from small pawn shops to large institutions — manage assets efficiently,
      securely, and intelligently for the modern world.
    </p>

      <h3>What Each Section Does:</h3>

      <ul>
        <li><b>Customer Management:</b> Add new customers</li>
        <li><b>Asset Valuation:</b> Add pawned assets</li>
        <li><b>Loan Management:</b> Manage loan details</li>
        <li><b>Analytics:</b> View reports and data</li>
        <li><b>Payments:</b> Track due payments</li>
        <li><b>Support:</b> User assistance</li>
      </ul>
    </section>

    <section className="modules">
      <a href="#about" className="module">ℹ️ About</a>
      <a href="#customers" className="module">👥 Customers</a>
      <a href="#assets" className="module">💎 Assets</a>
      <a href="#loans" className="module">💰 Loans</a>
      <a href="#reports" className="module">📊 Reports</a>
      <a href="#payments" className="module">📅 Payments</a>
      <a href="#support" className="module">📞 Support</a>
    </section>

    
  </>
);
}
