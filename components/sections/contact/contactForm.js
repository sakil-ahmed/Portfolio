import React from "react";
import StyleForm from "./styleForm";

const ContactForm = () => {
  return (
    <StyleForm>
      <div className="display_flex">
        <div className="input_group">
          <input
            type="text"
            id="name"
            name="name"
            className="name"
            placeholder="Your Name"
          />
        </div>
        <div className="input_group">
          <input
            type="email"
            id="email"
            name="email"
            className="email"
            placeholder="Your Email"
          />
        </div>
        <div className="input_group">
          <input
            type="number"
            name="number"
            className="phone"
            id="phone"
            placeholder="Your Phone"
          />
        </div>
        <div className="input_group">
          <input
            type="text"
            name="subject"
            id="subject"
            className="subject"
            placeholder="Subject"
          />
        </div>
        <div className="input_group">
          <textarea
            id="message"
            name="message"
            className="message"
            placeholder="Write your message here"
          ></textarea>
        </div>
      </div>

      <div className="btn_group">
        <button className="btn">
          <span>Submit Now</span>
        </button>
      </div>
    </StyleForm>
  );
};

export default ContactForm;
