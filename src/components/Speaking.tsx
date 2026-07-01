import { BRAND_DATA } from '../data/content';

export default function Speaking() {
  const services = BRAND_DATA.services;

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">Engagements</span>
          <h2 className="section-title">Speaking & Consulting</h2>
          <div className="divider"></div>
          <p className="section-description">
            Bring the raw experience, sharp humor, and industry-defining insights of Jon Roseman to your next event or creative campaign.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon-wrapper">
                <i className={`fa-solid ${svc.icon}`}></i>
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta-block text-center">
          <p className="cta-notice">
            Interested in booking Jon for an after-dinner talk, keynote presentation, or private advisory session?
          </p>
          <a href="#contact" className="btn btn-gold">
            Book Jon Roseman
          </a>
        </div>
      </div>
    </section>
  );
}
