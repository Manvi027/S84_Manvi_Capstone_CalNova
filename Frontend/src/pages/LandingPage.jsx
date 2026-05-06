import "../styles/LandingPage.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate(); // ✅ ADDED THIS LINE

  return (
    <div className="main-container">

      {/* HERO — navbar overlays the image */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
            alt="A professional scheduling with a client in a cozy office"
          />
          <div className="hero-gradient" />
        </div>

        <nav className="navbar navbar--hero">
          <div className="logo logo--hero">CalNova</div>
          <div className="nav-links nav-links--hero">
            <Link to="/">Home</Link>
            <a href="#about">About</a>

            {/* ✅ FIXED BUTTON */}
            <button
              className="contact-btn"
              type="button"
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>
          </div>
        </nav>

        <div className="hero-content">
          <h1>
            Schedule Smart,<br />Work Better
          </h1>
          <p className="hero-sub">
            The all-in-one appointment platform for solo professionals & small businesses.
          </p>

          {/* ✅ FIXED BUTTON */}
          <button
            type="button"
            className="start-booking-btn"
            onClick={() => navigate("/login")}
          >
            Start Booking
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <span className="feature-icon">📅</span>
          <h3>Real-Time Booking</h3>
          <p>Clients see your availability and book instantly—no back-and-forth.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">👥</span>
          <h3>Client Management</h3>
          <p>Track appointments, manage client info, and reduce no-shows.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">🔔</span>
          <h3>Reminders</h3>
          <p>Automated confirmations and reminders keep everyone on track.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">📈</span>
          <h3>Business Growth</h3>
          <p>Modern dashboard to help you focus on what matters—your clients.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-text">
          <h2>About CalNova</h2>
          <p>
            CalNova is your all-in-one appointment scheduling platform designed
            to simplify bookings, reduce no-shows, and streamline your workflow.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <div className="testimonial-quote">
          <span className="quote-mark">“</span>
          CalNova has transformed how I manage my salon—no more missed appointments!
          <span className="quote-mark">”</span>
        </div>
        <div className="testimonial-author">— Priya S., Salon Owner</div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-col">
          <h4>Product</h4>
          <p>Appointments</p>
          <p>Calendar</p>
          <p>Clients</p>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <p>About</p>
          <p>Support</p>
          <p>Privacy</p>
        </div>
        <div className="footer-col">

          {/* ✅ FIXED BUTTON */}
          <button
            className="footer-btn"
            onClick={() => navigate("/login")}
          >
            Join Now
          </button>

          <div className="stars">★★★★★</div>
          <div className="footer-credit">
            &copy; {new Date().getFullYear()} CalNova
          </div>
        </div>
      </footer>

    </div>
  );
}