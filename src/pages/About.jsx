import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <main className="about">
      {/* Hero */}
      <section className="hero | section">
        <div className="container">
          <h1 className="hero__title">About The Outliers</h1>
          <p className="hero__tagline">
            A mission-first global consultancy that turns client challenges into
            opportunities for young innovators everywhere.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="exec | section">
        <div className="container">
          <h2>Executive Summary</h2>
          <p>
            The Outliers Global C.I.C. is dual-registered in Nigeria and the UK.
            We sell world-class AI, data-science and ESG solutions, then reinvest
            60 % of every pound earned into free youth programmes worldwide.
          </p>
          <p>
            Our focus areas are Artificial Intelligence, Data Science, Climate
            Tech, Sustainable Built Environment and ESG—delivered through
            open-source tools, hackathons and fellowships across four continents.
          </p>
        </div>
      </section>

      {/* Founder CTA */}
      <section className="founder | section">
        <div className="container glass">
          <h2>Meet Our Founder</h2>
          <p>
            Discover the journey of Iko Tambaya—award-winning data scientist and
            sustainability expert—and how one question reshaped an industry.
          </p>
          <Link to="/about/iko-tambaya" className="btn btn--primary">
            Learn More About Iko’s Vision
          </Link>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission | section">
        <div className="container grid-2">
          <article>
            <h3>Vision</h3>
            <p>
              A world where every talented young person can reach their full
              potential and co-create solutions to global challenges—regardless
              of geography or socioeconomic background.
            </p>
          </article>
          <article>
            <h3>Mission</h3>
            <p>
              Deliver premium consulting, then reinvest the majority of profit
              into mentorship, open data and youth-led innovation on every
              continent.
            </p>
          </article>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="objectives | section">
        <div className="container">
          <h2>Core Objectives 2024-2029</h2>
          <ul className="objectives-grid">
            {[
              "Train 10 000 youth worldwide",
              "Avoid 1 million tCO₂-e via client & fellow projects",
              "Open-source 25 tools & publish 12 peer-reviewed papers",
              "Maintain dual-asset-lock governance (NG & UK)",
            ].map((o, i) => (
              <li key={i} className="card">
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programme Areas */}
      <section className="programmes | section">
        <div className="container">
          <h2>Programme Areas</h2>
          <div className="programme-grid">
            {[{
              title: "Consulting Studio",
              bullets: ["AI & ESG Advisory", "Net-Zero Pathways", "Risk Dashboards"]
            }, {
              title: "Fellowship",
              bullets: ["6–12-month incubator", "Paid project placements", "Global mentors"]
            }, {
              title: "Open Challenges",
              bullets: ["Quarterly hackathons", "Seed grants", "Open-source deliverables"]
            }, {
              title: "Virtual Academy",
              bullets: ["MOOCs & CPD", "Global South free access", "Corporate upskilling"]
            }, {
              title: "Research Fund",
              bullets: ["Youth-led studies", "Open-access papers", "Micro-grants"]
            }, {
              title: "Resilience Labs",
              bullets: ["Pop-up maker spaces", "GPU & sensor access", "Local hack-days"]
            }].map(p => (
              <article key={p.title} className="card">
                <h4>{p.title}</h4>
                <ul>
                  {p.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}