import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* About / Brand */}
        <Link to="/" className="brand">
          <div className="brand-text">
            <span className="brand-name">The Outliers</span>
            <span className="brand-motto">Non solus ambulabis...</span>
          </div>
        </Link>

        {/* Quick Links */}
        <nav className="footer__links" aria-labelledby="footer-quick">
          <h4 id="footer-quick" className="footer__heading">
            Quick Links
          </h4>
          <ul className="footer__list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Our Programmes</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <address className="footer__contact" aria-labelledby="footer-contact">
          <h4 id="footer-contact" className="footer__heading">
            Contact
          </h4>
          <ul className="footer__list">
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>Birmingham, UK</span>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href="tel:+44789567890">+44 789 567-890</a>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href="mailto:info@theoutliers.org">info@theoutliers.org</a>
            </li>
          </ul>
        </address>

        {/* Social Links */}
        <div className="footer__social" aria-labelledby="footer-social">
          <h4 id="footer-social" className="footer__heading">
            Connect
          </h4>
          <ul className="footer__icons">
            <li>
              <a
                href="https://facebook.com/theoutliers"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/theoutliers"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/theoutliers"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/theoutliers"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <span>&copy; {year} The Outliers. All rights reserved.</span>
        <span>
          <Link to="/privacy-policy">Privacy Policy</Link> &middot;
          <Link to="/terms-of-service">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}
