import React from 'react';
import { FaInstagram,FaLinkedin,FaQuora, FaGithub } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className="contact-container">
            <div className="image-section">
                <img src="../src/assets/contact-me-1.jpg" alt="Contact Us" className="contact-image" />
            </div>
            <div className="form-section">
                <h1>Contact Me</h1>
                <form className="contact-form">
                    <label>Full Name</label>
                    <input type="text" name="fullName" placeholder="Your Name" />

                    <label>Email</label>
                    <input type="email" name="email" placeholder="Your Email" />

                    <label>Message</label>
                    <textarea name="message" placeholder="Your Message"></textarea>

                    <button type="submit">Contact Me</button>
                </form>
                <div className="contact-info">
                    
    
                </div>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/aditya-jain-0483a9280/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com/Aditya5240" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/itsaditya.xo/profilecard/?igsh=MWtpamp3d3htdXFtcA==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://www.quora.com/profile/Aditya-Jain-2749" target="_blank" rel="noopener noreferrer">
                        <FaQuora className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
