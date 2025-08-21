import './IkoTambaya.css';
import ikoTambayaPic from '../assets/iko_tambaya.jpg';

export default function IkoTambaya() {
  return (
    <article className="founder-bio">
      <header>
        <img src={ikoTambayaPic} alt="Iko Tambaya" />
        <h1>Iko Tambaya</h1>
        <p className="tagline">
          “I grew up where the power cuts out at noon and the sun never does.  
          That contradiction became my curriculum.”
        </p>
      </header>

      <section className="story">
        <p>
          I was born in Kaduna, Nigeria, at the intersection of red-dust streets
          and big-sky dreams.  My first classroom was a candle-lit veranda where
          my mother-our “Land Lady”-taught me that light can be rationed, but
          curiosity never runs out.
        </p>

        <p>
          Years later, in the same city, I stood inside a new concrete house
          whose walls sweated heat even at midnight.  I ran IES-VE on a
          borrowed laptop, modelled one passive tweak, and watched the cooling
          load fall by 47 %.  'That single simulation rewrote my career':
          buildings could breathe if we gave them lungs.
        </p>

        <p>
          Today I hold two master’s degrees-one in Sustainable Built Environments
          (Reading) and one in AI & Data Science (Hull)-but the real thesis is
          still that first house.  Every model I build, every line of Python I
          write, is an attempt to cool another room without burning another
          litre of diesel.
        </p>

        <p>
          My research has been recognised by the Green Building Council of
          Nigeria and the UPP Foundation; my dashboards sit on government
          desktops from the UK to Nigeria.  Yet the metric I care about is
          simpler: how many young minds feel invited to the table.  At The
          Outliers we hire fellows before we hire consultants, because the next
          big insight is probably sleeping in a dorm room without reliable Wi-Fi.
        </p>

        <p>
          When I’m not wrangling data or mentoring teenagers, you’ll find me
          cycling Birmingham’s canals-reminding myself that cities, like code,
          are never finished; they just iterate.
        </p>
      </section>

      <footer>
        <a
          href="https://linkedin.com/in/iko-tambaya-50b938122"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say hello on LinkedIn
        </a>
        <a
          href="https://github.com/tambaya"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my open-source work
        </a>
      </footer>
    </article>
  );
}