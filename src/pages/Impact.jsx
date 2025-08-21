import './Impact.css';

export default function Impact() {
  return (
    <section className="impact-page">
      <h1>Our Impact</h1>
      <p>From mentorship to innovation, here’s what we’re achieving together:</p>

      <div className="impact-metrics">
        <div className="metric">
          <h2>10,000+</h2>
          <p>Youth mentored & trained</p>
        </div>
        <div className="metric">
          <h2>15+</h2>
          <p>Countries reached</p>
        </div>
        <div className="metric">
          <h2>300+</h2>
          <p>Innovations supported</p>
        </div>
        <div className="metric">
          <h2>30</h2>
          <p>Research publications</p>
        </div>
      </div>

      <section className="impact-targets">
        <h3>2025–2028 Goals</h3>
        <ul>
          <li>🌍 Expand to 25 countries</li>
          <li>🧑🏾‍💻 Support 1,000 youth-led innovations</li>
          <li>📚 Publish 100+ open-access papers</li>
          <li>🤝 Build a thriving global alumni network</li>
        </ul>
      </section>
    </section>
  );
}