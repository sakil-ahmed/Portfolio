import React, { useRef, useState } from "react";
import StyleForm from "./styleForm";

const ContactForm = () => {
  const [message, setMessage] = useState({});

  const form = useRef();

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    form.current.reset();
  };

  return (
    <StyleForm ref={form} onSubmit={handleSubmit}>
      <div className="display_flex">
        <div className="input_group">
          <input
            type="text"
            id="name"
            name="name"
            className="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_group">
          <input
            type="email"
            id="email"
            name="email"
            className="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_group">
          <input
            type="number"
            name="number"
            className="phone"
            id="phone"
            placeholder="Your Phone"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_group">
          <input
            type="text"
            name="subject"
            id="subject"
            className="subject"
            placeholder="Subject"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_group">
          <textarea
            id="message"
            name="message"
            className="message"
            placeholder="Write your message here"
            onChange={handleChange}
            required
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
