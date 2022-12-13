import React, { useRef, useEffect } from "react";
import StyleForm from "./styleForm";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("myyvrqkk");

  const Contactform = useRef();

  useEffect(() => {
    if (state.succeeded) {
      Contactform.current.reset();
    } else {
      // Nothing to do
    }
  }, [state]);

  return (
    <>
      <StyleForm method="POST" ref={Contactform} onSubmit={handleSubmit}>
        <div className="display_flex">
          <div className="input_group">
            <input
              type="text"
              id="name"
              name="name"
              className="name"
              placeholder="Your Name"
              required
              spellCheck="false"
            />
          </div>
          <div className="input_group">
            <input
              type="email"
              id="email"
              name="email"
              className="email"
              placeholder="Your Email"
              required
              spellCheck="false"
            />
          </div>
          <div className="input_group">
            <input
              type="number"
              name="number"
              className="phone"
              id="phone"
              placeholder="Your Phone"
              required
              spellCheck="false"
            />
          </div>
          <div className="input_group">
            <input
              type="text"
              name="subject"
              id="subject"
              className="subject"
              placeholder="Subject"
              required
              spellCheck="false"
            />
          </div>
          <div className="input_group">
            <textarea
              id="message"
              name="message"
              className="message"
              placeholder="Write your message here"
              required
              spellCheck="false"
            ></textarea>
          </div>
        </div>

        <div className="btn_group">
          <button type="submit" className="btn">
            <span>Submit Now</span>
          </button>
        </div>
      </StyleForm>
    </>
  );
};

export default ContactForm;
