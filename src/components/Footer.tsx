export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-block">
      <div className="container footer-container">
        <div className="footer-top-row">
          <a href="#" className="logo footer-logo" onClick={handleScrollToTop}>
            <span className="gold-text">JON</span> ROSEMAN
          </a>
          <p className="footer-tagline">"The Godfather of the Music Video"</p>
          <a 
            href="#" 
            className="btn-back-to-top" 
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
          >
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Jon Roseman. All rights reserved. Untold Stories, Legendary Impact.
          </p>
          <p className="designer-text">Crafted with Luxury & Code.</p>
        </div>
      </div>
    </footer>
  );
}
