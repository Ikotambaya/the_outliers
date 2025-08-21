import './GetInvolved.css'; // <-- Add this line to import the GetInvolved.css

export default function GetInvolved() {
  return (
    <section className="get-involved-section-container"> {/* Semantic class for the main section */}
      <h2 className="get-involved-heading">Get Involved</h2> {/* Semantic class for the heading */}
      <p className="get-involved-intro-paragraph">Whether you're a donor, volunteer, mentor, or just passionate about global development - there's a place for you.</p>
      <ul className="get-involved-list"> {/* Semantic class for the list container */}
        <li><strong>Volunteer:</strong> Help us run events, mentor youth, or contribute skills.</li>
        <li><strong>Partner:</strong> Collaborate with us on programs or research.</li>
        <li><strong>Donate:</strong> Support our mission financially</li>
      </ul>
    </section>
  );
}