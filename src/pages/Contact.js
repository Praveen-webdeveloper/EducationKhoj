import React from "react";

function Contact() {
  return (
    <div>
      {/* Header Section */}
      <header className="contact-header text-white">
        <div className="container py-5 text-center">
          <h1 className="display-4">Get in Touch with Us</h1>
          <p className="lead">
            Your feedback and questions help us improve. Reach out anytime.
          </p>
        </div>
      </header>

      {/* Contact Form and Details */}
      <div className="contact-page" >
        <div className="container py-5">
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-lg-7">
              <form className="contact-form p-4 rounded bg-light shadow-sm">
                <h2 className="form-title mb-4">Send Us a Message</h2>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Your subject"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    rows="5"
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="col-lg-5">
              <div className="p-4 rounded bg-light shadow-sm">
                <h2>Contact Information</h2>
                <p>Feel free to reach us directly through the following details:</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><strong>Email:</strong> support@newswebsite.com</li>
                  <li className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</li>
                  <li className="mb-2"><strong>Address:</strong> 123 News Avenue, Media City</li>
                </ul>
                <h5>Follow Us</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="social-link"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
              <div className="mt-4">
                <iframe
                  title="Our Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8254291939677!2d144.96315731531802!3d-37.81410797975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57750f0d927800!2sNews%20Corporation!5e0!3m2!1sen!2sau!4v1672485699021!5m2!1sen!2sau"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
