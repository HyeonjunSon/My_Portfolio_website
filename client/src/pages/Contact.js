import React from 'react';
import '../App.css'; // Contact 스타일링을 포함한 CSS 파일

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        I'm always open to discussing new projects, creative ideas,<br></br>
        or opportunities to be part of your visions.
      </p>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:hson15@example.com">hson15@myseneca.ca</a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/HyeonjunSon"
            target="_blank"
            rel="noopener noreferrer"
          >
            HyeonjunSon
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/hyeonjun-son/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hyeonjun Son
          </a>
        </p>
      </div>
    </div>
  );
}
export default Contact;
