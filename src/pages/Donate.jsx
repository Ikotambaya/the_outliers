import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './Donate.css'; // Import the CSS file

export default function Donate() {
  const [customAmount, setCustomAmount] = useState(5000); // State to store the user's custom amount, default to 5000
  const [email, setEmail] = useState(''); // State to store user's email

  // Optional: Array for quick-select amounts
  const quickAmounts = [1000, 5000, 10000, 25000];

  // Helper to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0, // No kobo for whole naira
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Add Paystack script dynamically if not already present
  useEffect(() => {
    const scriptId = 'paystack-sdk';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.id = scriptId;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []); // Run once on component mount

  const handlePay = () => {
    if (customAmount <= 0 || isNaN(customAmount)) {
      alert("Please enter a valid donation amount.");
      return;
    }
    if (!email || !email.includes('@')) {
      alert("Please enter a valid email address.");
      return;
    }

    if (typeof window.PaystackPop === 'undefined') {
      alert("Paystack payment system not loaded. Please try again or contact support.");
      console.error("PaystackPop is not defined. Make sure the Paystack script is loaded.");
      return;
    }

    const donationAmountKobo = customAmount * 100; // Convert to kobo

    const handler = window.PaystackPop.setup({
      key: 'pk_test_3d62ae40272b069ef3e9e7dd5417d2c01efe9edb', // Replace with your actual public key
      email: email, // Use the dynamically captured user email
      amount: donationAmountKobo, // in kobo
      currency: 'NGN',
      callback: function (response) {
        alert('Donation successful! Reference: ' + response.reference + '. Thank you!');
        // You might want to send this response to your backend for verification
      },
      onClose: function () {
        alert('Payment window closed. You can try again anytime!');
      }
    });
    handler.openIframe();
  };

  return (
    <section className="donate-section-container">
      <h2 className="donate-heading">Support Our Mission</h2>
      <p className="donate-intro-paragraph">
        Every contribution helps us empower the next generation. Your generous support enables our programs in innovation, AI, and climate-smart solutions. Please enter the amount you wish to donate below.
      </p>

      <div className="donation-input-group">
        <label htmlFor="donation-amount" className="donate-label">Enter your amount:</label>
        <div className="donate-amount-wrapper">
          <span className="currency-symbol">₦</span>
          <input
            type="number"
            id="donation-amount"
            className="donate-amount-input"
            value={customAmount}
            onChange={(e) => setCustomAmount(Math.max(0, parseInt(e.target.value) || 0))} // Ensure positive integer or 0
            min="0"
            placeholder="e.g., 5000"
          />
        </div>
        <div className="quick-amounts-container">
          {quickAmounts.map((amount) => (
            <button
              key={amount}
              className={`quick-amount-button ${customAmount === amount ? 'active' : ''}`}
              onClick={() => setCustomAmount(amount)}
            >
              {formatCurrency(amount)}
            </button>
          ))}
        </div>

        <label htmlFor="donor-email" className="donate-label">Your Email:</label>
        <input
          type="email"
          id="donor-email"
          className="donate-email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
        />
      </div>

      <button onClick={handlePay} className="donate-button">
        Donate {formatCurrency(customAmount)} {/* Dynamically display the current amount */}
      </button>

      <p className="donate-disclaimer">
        * Please note: If in doubt, contact us via our official channel. All transactions are securely processed via Paystack.
      </p>
    </section>
  );
}