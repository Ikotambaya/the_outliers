import './Programs.css';

export default function Programs() {
  return (
    // Replaced Tailwind classes with custom class 'programs-section-container'
    <section className="programs-section-container">
      {/* Replaced Tailwind classes with custom class 'programs-heading' */}
      <h2 className="programs-heading">Our Programs</h2>
      {/* Replaced Tailwind classes with custom class 'programs-grid' */}
      <ul className="programs-grid">
        {/* Replaced Tailwind classes with custom class 'program-card' */}
        <li className="program-card">
          {/* Replaced Tailwind classes with custom class 'program-card-title' */}
          <h3 className="program-card-title">Outliers Fellowship</h3>
          {/* Added custom class 'program-card-description' */}
          <p className="program-card-description">6-month immersive mentorship + innovation bootcamp</p>
        </li>
        {/* Replaced Tailwind classes with custom class 'program-card' */}
        <li className="program-card">
          {/* Replaced Tailwind classes with custom class 'program-card-title' */}
          <h3 className="program-card-title">International Youth Summit</h3>
          {/* Added custom class 'program-card-description' */}
          <p className="program-card-description">Global gathering of students, mentors, and changemakers</p>
        </li>
        {/* Replaced Tailwind classes with custom class 'program-card' */}
        <li className="program-card">
          {/* Replaced Tailwind classes with custom class 'program-card-title' */}
          <h3 className="program-card-title">AI & Sustainability in ESG Labs</h3>
          {/* Added custom class 'program-card-description' */}
          <p className="program-card-description">Workshops focused on solving real-world problems using AI and data science</p>
        </li>
      </ul>
    </section>
  );
}