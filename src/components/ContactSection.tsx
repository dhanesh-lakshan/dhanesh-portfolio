import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { SectionProps } from '../types';
import { CONTACT_LINKS } from '../data/contactLinks';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GitHubIcon,
  LinkedInIcon,
  SendIcon,
  UserIcon,
  FileTextIcon,
  MessageSquareIcon,
  LockIcon,
} from './TechIcons';

export const ContactSection: React.FC<SectionProps> = ({ id, sectionRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    hp: '', // Honeypot field for anti-spam
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validate = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.hp) {
      setStatus('success');
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Live Email Submission to FormSubmit directly delivering to dhanesh.lakshan.it@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/dhanesh.lakshan.it@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _subject: `New Portfolio Message: ${formData.subject.trim()} (from ${formData.name.trim()})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (
        response.ok &&
        (data?.success === 'true' ||
          data?.success === true ||
          data?.message?.includes('Activation') ||
          data?.message?.includes('sent'))
      ) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', hp: '' });
      } else if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', hp: '' });
      } else {
        throw new Error(data?.message || 'Could not send message. Please use direct email.');
      }
    } catch (err: any) {
      console.warn('Primary email submission attempt:', err);
      // Secondary fallback to serverless /api/contact if available
      try {
        const fallbackRes = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (fallbackRes.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '', hp: '' });
          return;
        }
      } catch {
        // Fallback error handling
      }

      setStatus('error');
      setErrorMessage(
        err.message || 'An error occurred while sending your message. Please click below to email directly.'
      );
    }
  };

  return (
    <section className="contact-section-wrapper" id={id} ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="contact-header-block">
          <div className="contact-badge-pill">
            <MailIcon size={15} />
            <span>CONTACT</span>
          </div>

          <h2 className="contact-heading">
            Let's Build <span className="contact-heading-blue">Something</span>{' '}
            <span className="contact-heading-teal">Meaningful.</span>
          </h2>

          <p className="contact-subheading">
            I'm always open to discussing data-driven ideas, software projects, and opportunities
            to learn, collaborate, and build something valuable.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="contact-main-grid">
          {/* Left Column: Direct Info Card with Glassmorphic Surface */}
          <div className="contact-direct-card">
            {/* Actively seeking status badge */}
            <div className="contact-status-badge">
              <span className="contact-status-dot" aria-hidden="true"></span>
              <span className="contact-status-text">
                Actively seeking internship and full-time opportunities
              </span>
            </div>

            {/* Direct Heading */}
            <h3 className="contact-direct-heading">
              Let's work <span className="contact-together-accent">together.</span>
            </h3>

            {/* Narrative text */}
            <p className="contact-direct-desc">
              Whether you have an internship position, a software inquiry, or a data project in
              mind, I would love to connect and explore how we can build something impactful
              together.
            </p>

            {/* Contact Channels List */}
            <div className="contact-channels-list">
              {/* Phone */}
              <div className="contact-channel-item">
                <div className="channel-icon-container icon-phone">
                  <PhoneIcon size={20} />
                </div>
                <div className="channel-text-group">
                  <span className="channel-type-label">Phone</span>
                  <a href="tel:+94773937391" className="channel-value-text">
                    +94 77 393 7391
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-channel-item">
                <div className="channel-icon-container icon-email">
                  <MailIcon size={20} />
                </div>
                <div className="channel-text-group">
                  <span className="channel-type-label">Email</span>
                  <a
                    href={CONTACT_LINKS.email}
                    className="channel-value-text"
                  >
                    dhanesh.lakshan.it@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-channel-item">
                <div className="channel-icon-container icon-location">
                  <MapPinIcon size={20} />
                </div>
                <div className="channel-text-group">
                  <span className="channel-type-label">Location</span>
                  <span className="channel-value-text">Nattandiya, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Find me on row */}
            <div className="contact-social-footer">
              <span className="find-me-label">Find me on</span>
              <div className="find-me-buttons">
                <a
                  href={CONTACT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-btn"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon size={20} />
                </a>

                <a
                  href={CONTACT_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-btn linkedin-btn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon size={20} />
                </a>

                <a
                  href={CONTACT_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-btn whatsapp-btn"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp size={21} aria-hidden="true" />
                </a>

                <a
                  href={CONTACT_LINKS.email}
                  className="social-circle-btn email-social-btn"
                  aria-label="Send an email"
                >
                  <MailIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send a Direct Message Form Card */}
          <div className="contact-form-card">
            {/* Form Card Header */}
            <div className="contact-form-header">
              <div className="form-header-icon-box">
                <SendIcon size={22} />
              </div>
              <div className="form-header-titles">
                <h3 className="form-title">Send a Direct Message</h3>
                <p className="form-subtitle">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
            </div>

            {status === 'success' ? (
              <div className="form-success-state" role="alert">
                <div className="success-icon-wrap">
                  <span className="success-check">✓</span>
                </div>
                <h4 className="success-title">Message Delivered!</h4>
                <p className="success-desc">
                  Thank you for reaching out. Your message has been sent directly to{' '}
                  <strong>dhanesh.lakshan.it@gmail.com</strong>. I will review it and reply as
                  soon as possible.
                </p>
                <button
                  type="button"
                  className="btn-send-another"
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form-element" onSubmit={handleSubmit} noValidate>
                {/* Anti-spam honeypot */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="hp"
                    tabIndex={-1}
                    value={formData.hp}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error-banner" role="alert">
                    <span>⚠️ {errorMessage}</span>
                    <a
                      href={`${CONTACT_LINKS.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="error-mailto-link"
                    >
                      Send via default email client →
                    </a>
                  </div>
                )}

                {/* Your Name * */}
                <div className="form-field-group">
                  <label htmlFor="contact-name" className="field-label">
                    Your Name <span className="req-star">*</span>
                  </label>
                  <div className="input-with-icon-wrap">
                    <span className="field-prefix-icon" aria-hidden="true">
                      <UserIcon size={18} />
                    </span>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      className={`form-input-styled ${formErrors.name ? 'is-invalid' : ''}`}
                      disabled={status === 'loading'}
                    />
                  </div>
                  {formErrors.name && (
                    <span className="field-error-text">{formErrors.name}</span>
                  )}
                </div>

                {/* Email Address * */}
                <div className="form-field-group">
                  <label htmlFor="contact-email" className="field-label">
                    Email Address <span className="req-star">*</span>
                  </label>
                  <div className="input-with-icon-wrap">
                    <span className="field-prefix-icon" aria-hidden="true">
                      <MailIcon size={18} />
                    </span>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. your@email.com"
                      className={`form-input-styled ${formErrors.email ? 'is-invalid' : ''}`}
                      disabled={status === 'loading'}
                    />
                  </div>
                  {formErrors.email && (
                    <span className="field-error-text">{formErrors.email}</span>
                  )}
                </div>

                {/* Subject * */}
                <div className="form-field-group">
                  <label htmlFor="contact-subject" className="field-label">
                    Subject <span className="req-star">*</span>
                  </label>
                  <div className="input-with-icon-wrap">
                    <span className="field-prefix-icon" aria-hidden="true">
                      <FileTextIcon size={18} />
                    </span>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship opportunity / Data project"
                      className={`form-input-styled ${formErrors.subject ? 'is-invalid' : ''}`}
                      disabled={status === 'loading'}
                    />
                  </div>
                  {formErrors.subject && (
                    <span className="field-error-text">{formErrors.subject}</span>
                  )}
                </div>

                {/* Message * */}
                <div className="form-field-group">
                  <label htmlFor="contact-message" className="field-label">
                    Message <span className="req-star">*</span>
                  </label>
                  <div className="textarea-container-styled">
                    <span className="textarea-prefix-icon" aria-hidden="true">
                      <MessageSquareIcon size={18} />
                    </span>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      maxLength={500}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your inquiry or project requirements..."
                      className={`form-textarea-styled ${formErrors.message ? 'is-invalid' : ''}`}
                      disabled={status === 'loading'}
                    ></textarea>
                    <div className="textarea-char-count">{formData.message.length}/500</div>
                  </div>
                  {formErrors.message && (
                    <span className="field-error-text">{formErrors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="form-submit-gradient-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="btn-spinner" aria-hidden="true"></span>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <SendIcon size={18} />
                      <span>Send Message</span>
                      <span className="submit-arrow">→</span>
                    </>
                  )}
                </button>

                {/* Privacy reassurance note */}
                <div className="contact-privacy-note">
                  <LockIcon size={14} />
                  <span>Your information will only be used to respond to your message.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
