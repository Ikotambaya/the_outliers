import Hero from '../components/Hero';
import './Home.css';

export default function Home() {
  return (
    <main className="home">
      <Hero />

      <section className="intro">
        <div className="intro__content | container">
          <h2 className="intro__heading">
            Empowering the Next Generation for Global Impact
          </h2>
          <p className="intro__text">
            The Outliers is an international non-profit empowering youth
            leaders, problem-solvers and innovators-especially in developing
            regions.  We close the gap between talent and opportunity through
            rigorous research, mentorship and open knowledge exchange in AI,
            Data Science, Climate, Sustainability and ESG.
          </p>

          <a className="btn btn--primary" href="/about">
            Learn more about The Outliers
          </a>
        </div>
      </section>


    </main>
  );
}