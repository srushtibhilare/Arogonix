import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${form.name}! We'll contact you soon.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <h2 className="contact-heading">Get In Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            placeholder="John Doe"
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            placeholder="your@email.com"
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            placeholder="Your message here..."
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;