export default function ImpactStrip() {
  const stats = [
    { value: '3 200', label: 'Students mentored' },
    { value: '27', label: 'AI prototypes shipped' },
    { value: '12', label: 'Countries reached' },
  ];
  return (
    <section className="impact">
      <div className="container">
        <div className="impact__grid">
          {stats.map(s => (
            <div key={s.label}>
              <p className="impact__number">{s.value}</p>
              <p className="impact__label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}