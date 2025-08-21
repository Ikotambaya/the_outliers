export default function TrusteeCard({ name, title, bio, image }) {
  return (
    <div className="trustee-card">
      <img src={image} alt={`${name}, ${title} of The Outliers`} className="trustee-image" />
      <h3>{name}</h3>
      <p className="trustee-title">{title}</p>
      <p className="trustee-bio">{bio}</p>
    </div>
  );
}