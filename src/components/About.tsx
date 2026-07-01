import { BRAND_DATA } from '../data/content';

export default function About() {
  const { profile } = BRAND_DATA;

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">The Biography</span>
          <h2 className="section-title">A Lifetime Behind the Scenes</h2>
          <div className="divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <div className="image-frame-border"></div>
              <img 
                src="/assets/jon_portrait.webp" 
                alt="Jon Roseman Studio Portrait" 
                className="about-img"
              />
              <div className="about-badge">
                <span className="badge-year gold-text">1975</span>
                <span className="badge-text">Launched the MTV Era</span>
              </div>
            </div>
          </div>

          <div className="about-content-column">
            <h3 className="about-subheading">Uncensored, Unmatched, Unfiltered.</h3>
            
            <div className="bio-text-container">
              {profile.bioLong.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            
            <div className="roles-container">
              <h4 className="roles-title gold-text">Areas of Expertise</h4>
              <ul className="roles-list">
                {profile.roles.map((role, idx) => (
                  <li key={idx}>{role}</li>
                ))}
              </ul>
            </div>

            <blockquote className="about-quote">
              <p>
                "We had four hours, a mobile truck, and a band called Queen. We didn't know we were changing history; we were just trying to deliver a tape."
              </p>
              <cite className="gold-text">&mdash; Jon Roseman on producing Bohemian Rhapsody</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
