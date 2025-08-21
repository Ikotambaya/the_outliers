import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import './Contact.css'; // <-- Add this line to import the Contact.css

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Replace with your actual EmailJS credentials
    emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_user_id')
      .then(() => alert("Message sent!"))
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section className="contact-section-container"> {/* Wrapper section for overall page padding/centering */}
      <h2 className="contact-heading">Contact Us</h2> {/* Add a clear heading for the page */}
      <p className="contact-intro-paragraph">We'd love to hear from you! Please fill out the form below to get in touch.</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form"> {/* Semantic class for the form */}
        <input name="name" required className="contact-input" placeholder="Your Name" />
        <input name="email" type="email" required className="contact-input" placeholder="Your Email" />
        <textarea name="message" rows="5" required className="contact-textarea" placeholder="Your Message"></textarea>
        <button type="submit" className="contact-submit-button">Send Message</button> {/* Semantic class for the button */}
      </form>
    </section>
  );
}