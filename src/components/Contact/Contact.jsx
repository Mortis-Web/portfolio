import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>contact me</h2>
      <div className="container">
        <div className="options">
          <article className="contactOption">
            <MdOutlineEmail className="optionIcon" />
            <h4>Email</h4>
            <h5>memaraaa123@gmail.com</h5>
            <a href="mailto:memaraaa123@gmail.com" target="_blank">send a message</a>
          </article>
          <article className="contactOption">
            <FaWhatsapp className="optionIcon"/>
            <h4>WhatsApp</h4>
            <h5>+20109769####</h5>
            <a href="https://wa.me/+201097693049" target="_blank">send a message</a>
          </article>
          <article className="contactOption">
          <FaFacebookMessenger  className="optionIcon" />
          <h4>Messanger</h4>
            <h5>Mohammed Emara</h5>
            <a href="https://m.me/Mohamed Emara " target="_blank">send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="text" placeholder="Your Full Name.." />
          <input type="email" name="email" placeholder="Your Email.." />
          <textarea name="message" rows="7" placeholder="Your Message.." required></textarea>
          <button type="submit" className="btn btnPrime">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
