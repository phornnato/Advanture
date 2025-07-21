import React from 'react';


function Footer() {
  return (
    <footer className="footer text-white pt-5">
      {/* Top Section: Social Links */}
      <section className="footer-top d-flex flex-column flex-lg-row justify-content-between align-items-center px-5 py-4 border-bottom">
        <div className="mb-3 mb-lg-0">
          <span>🌍 Connect with us on social media:</span>
        </div>
        <div className="footer-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>
      </section>

      {/* Middle Section: Main Links */}
      <section className="footer-body py-5">
        <div className="container">
          <div className="row">
            {/* Brand */}
            <div className="col-md-6 col-lg-3 mb-4">
              <h5 className="fw-bold mb-3">🌄 Travel Ft Phorn</h5>
              <p>Discover the world with unforgettable adventures. Nature, culture, and real-life experience await you.</p>
            </div>

            {/* Tours */}
            <div className="col-md-6 col-lg-2 mb-4">
              <h6 className="fw-bold mb-3">Tours</h6>
              <ul className="list-unstyled">
                <li><a href="#">Mountains</a></li>
                <li><a href="#">Beaches</a></li>
                <li><a href="#">Forest</a></li>
                <li><a href="#">Camping</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="col-md-6 col-lg-2 mb-4">
              <h6 className="fw-bold mb-3">Useful Links</h6>
              <ul className="list-unstyled">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Booking</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-6 col-lg-3 mb-4">
              <h6 className="fw-bold mb-3">Contact</h6>
              <p><i className="fas fa-home me-2"></i> Phnom Penh, Cambodia</p>
              <p><i className="fas fa-envelope me-2"></i> travel@phornadventure.com</p>
              <p><i className="fas fa-phone me-2"></i> +855 12 345 678</p>
              <p><i className="fas fa-print me-2"></i> +855 23 456 789</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <div className="footer-bottom text-center py-3">
        © {new Date().getFullYear()} <a href="#" className="fw-bold">Travel Ft Phorn</a>
      </div>
    </footer>
  );
}

export default Footer;
