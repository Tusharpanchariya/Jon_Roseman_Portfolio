'use client';

import { useState } from 'react';

type StatusType = 'idle' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState<StatusType>('idle');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !inquiryType || !message.trim()) {
      setStatus('error');
      setAlertMessage('Please fill in all required fields before transmitting.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    // Simulate luxury API communication
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setAlertMessage("Transmission Successful. Jon Roseman's office has received your inquiry. We will respond within 48 business hours.");
      
      // Reset form fields
      setName('');
      setEmail('');
      setInquiryType('');
      setMessage('');

      // Auto dismiss success alert
      setTimeout(() => {
        setStatus('idle');
      }, 7000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-grid">
          
          {/* Contact Details Information */}
          <div className="contact-info-column">
            <span className="section-subtitle gold-text">Let's Connect</span>
            <h2 className="section-title">Inquiries & Bookings</h2>
            <p className="contact-lead-text">
              Whether you represent a corporate event, a broadcast network, a publication, or are simply requesting a signed copy of 'From Here To Obscurity', use the form to reach Jon Roseman's office.
            </p>
            
            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope gold-text"></i>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Direct Correspondence</span>
                  <a href="mailto:office@jonroseman.com" className="contact-link">
                    office@jonroseman.com
                  </a>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-briefcase gold-text"></i>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Speaking & Consulting Agencies</span>
                  <p className="contact-info-desc">
                    Represented directly. For keynotes, after-dinner speaking engagements, and media consulting briefs.
                  </p>
                </div>
              </div>
            </div>

            <div className="social-links-block">
              <span className="social-label gold-text">Follow Jon's Commentary:</span>
              <div className="social-links">
                <a href="#" className="social-link-btn" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className="social-link-btn" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
                <a href="#" className="social-link-btn" title="Twitter/X"><i className="fa-brands fa-x-twitter"></i></a>
              </div>
            </div>
          </div>

          {/* Booking Inquiry Form */}
          <div className="contact-form-column">
            <div className="glass-form-card">
              <h3 className="form-title">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="luxury-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="form-user-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="form-user-name" 
                      required 
                      placeholder="e.g. Michael Jackson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="form-user-email">Email Address *</label>
                    <input 
                      type="email" 
                      id="form-user-email" 
                      required 
                      placeholder="e.g. michael@jackson.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="form-inquiry-type">Inquiry Type *</label>
                    <select 
                      id="form-inquiry-type" 
                      required
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                    >
                      <option value="" disabled>Select an option...</option>
                      <option value="speaking">After Dinner / Keynote Speaking</option>
                      <option value="consulting">Media Consulting & Mentoring</option>
                      <option value="book">Signed Copy of 'From Here to Obscurity'</option>
                      <option value="press">Press & Media Interview Request</option>
                      <option value="other">General Message / Untold Story Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="form-user-message">Message *</label>
                    <textarea 
                      id="form-user-message" 
                      rows={5} 
                      required 
                      placeholder="Share your project details, event schedule, or query..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                {/* Status and Error Indicators */}
                {status !== 'idle' && (
                  <div className={`form-alert ${status}`}>
                    {alertMessage}
                  </div>
                )}

                <div className="form-row form-submit-row">
                  <button 
                    type="submit" 
                    className="btn btn-gold btn-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Transmitting Secured Inquiry...</span> 
                        <i className="fa-solid fa-spinner fa-spin gold-text" style={{ marginLeft: '10px' }}></i>
                      </>
                    ) : (
                      <>
                        <span>Send Secure Inquiry</span> 
                        <i className="fa-solid fa-paper-plane" style={{ marginLeft: '10px' }}></i>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
