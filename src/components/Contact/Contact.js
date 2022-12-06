import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "./Contact.css";

function Contact() {
  const successMessage = "Successfully Submitted.";
  const errorMessage =
    "Sorry, invalid form input(s). Your name and message must not be empty. You must enter an valid email address.";

  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);

  const [promptMessage, setPromptMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChangeHandler = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name && validateEmail(email) && message) {
      setInvalidName(false);
      setInvalidEmail(false);
      setInvalidMessage(false);
      setPromptMessage(successMessage);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      if (!name) {
        setInvalidName(true);
        setPromptMessage(errorMessage);
      } else {
        setInvalidName(false);
      }

      if (!validateEmail(email)) {
        setInvalidEmail(true);
        setPromptMessage(errorMessage);
      } else {
        setInvalidEmail(false);
      }

      if (!message) {
        setInvalidMessage(true);
        setPromptMessage(errorMessage);
      } else {
        setInvalidMessage(false);
      }
    }
  };

  return (
    <div className="contact">
      <div className="contact-links">
        <a className="contact-link" href="mailto:brandon.0702@hotmail.com">
          Send me an email
        </a>
        <a className="contact-link" href="https://github.com/BranBao1995">
          My GitHub
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/hongdong-brandon-bao/"
        >
          My LinkedIn
        </a>
      </div>

      <h2 className="form-title">
        Or..., send me a message by submitting the form?
      </h2>

      <form className="form">
        <input
          className={invalidName ? "error" : ""}
          value={name}
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={onChangeHandler}
        />
        <input
          className={invalidEmail ? "error" : ""}
          value={email}
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={onChangeHandler}
        />
        <textarea
          className={invalidMessage ? "error" : ""}
          value={message}
          name="message"
          placeholder="Enter your message"
          onChange={onChangeHandler}
        />
        <button className="form-button" type="button" onClick={submitHandler}>
          Submit
        </button>
        {promptMessage && (
          <p
            className={
              promptMessage === successMessage ? "success-text" : "error-text"
            }
          >
            {promptMessage}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
