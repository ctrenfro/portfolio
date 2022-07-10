import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_spko48b",
        "template_u6b6hyo",
        form.current,
        "36Y2SwkdzTKtWo5E4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact-container">
      <form class="cf" ref={form} onSubmit={sendEmail}>
        <div class="half left cf">
          <input type="text" placeholder="Name" name="name"></input>
          <input type="email" name="email" placeholder="Email address"></input>
          <input type="text" placeholder="Subject" name="subject"></input>
        </div>
        <div class="half right cf">
          <textarea name="message" type="text" placeholder="Message"></textarea>
        </div>
        <input type="submit" value="Send" id="input-submit"></input>
      </form>
    </div>
  );
}

export default Contact;
