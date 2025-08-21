import TrusteeCard from '../components/TrusteeCard';
import trusteesData from '../data/trusteesData';   // updated path & file
import './Trustee.css';

export default function Trustees() {
  return (
    <section className="trustees-page">
      <h1>Meet Our Trustees</h1>
      <p className="tagline">
        Four minds, one mission-steering The Outliers with integrity, transparency,
        and a shared passion for youth empowerment.
      </p>

      <div className="trustee-grid">
        {trusteesData.length ? (
          trusteesData.map((t) => <TrusteeCard key={t.id} {...t} />)
        ) : (
          <p>No trustees available</p>
        )}
      </div>
    </section>
  );
}