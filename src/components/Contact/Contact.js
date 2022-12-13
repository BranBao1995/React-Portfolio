import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from "@emailjs/browser";
import { FaExclamationCircle } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const [input, setInput] = useState({
    name: {
      value: "",
      valid: false,
      rule: "string",
      touched: false,
      errMessage: "Name must not be empty.",
    },
    email: {
      value: "",
      valid: false,
      rule: "email",
      touched: false,
      errMessage: "Invalid email.",
    },
    message: {
      value: "",
      valid: false,
      rule: "string",
      touched: false,
      errMessage: "Message must not be empty.",
    },
  });

  const validationHandler = (value, rule) => {
    let isValid = true;
    if (!rule) {
      isValid = true;
    }
    if (rule === "string") {
      isValid = value.trim() !== "" && isValid;
    }
    if (rule === "email") {
      isValid = validateEmail(value) && isValid;
    }

    return isValid;
  };

  const onChangeHandler = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setInput({
        ...input,
        name: {
          ...input.name,
          value: inputValue,
          valid: validationHandler(inputValue, input.name.rule),
          touched: true,
        },
      });
    } else if (inputType === "email") {
      setInput({
        ...input,
        email: {
          ...input.email,
          value: inputValue,
          valid: validationHandler(inputValue, input.email.rule),
          touched: true,
        },
      });
    } else if (inputType === "message") {
      setInput({
        ...input,
        message: {
          ...input.message,
          value: inputValue,
          valid: validationHandler(inputValue, input.message.rule),
          touched: true,
        },
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hdb",
        "template_hdb",
        form.current,
        "1QsWsFeWeaB7-Czc_"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your email has been sent :)");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const submitButton = () => {
    let component;
    if (input.name.valid && input.email.valid && input.message.valid) {
      component = (
        <div className="btn-errMessages">
          <button className="form-button" type="button" onClick={submitHandler}>
            Submit
          </button>
        </div>
      );
    } else {
      component = (
        <div className="btn-errMessages">
          <button className="form-button-disabled" type="button" disabled>
            Submit
          </button>
          {!input.name.valid && input.name.touched ? (
            <p className="errMessage">
              <FaExclamationCircle className="errMessage-icon" />
              <span>{input.name.errMessage}</span>
            </p>
          ) : (
            ""
          )}
          {!input.email.valid && input.email.touched ? (
            <p className="errMessage">
              <FaExclamationCircle className="errMessage-icon" />
              <span>{input.email.errMessage}</span>
            </p>
          ) : (
            ""
          )}
          {!input.message.valid && input.message.touched ? (
            <p className="errMessage">
              <FaExclamationCircle className="errMessage-icon" />
              <span>{input.message.errMessage}</span>
            </p>
          ) : (
            ""
          )}
        </div>
      );
    }

    return component;
  };

  return (
    <div className="contact">
      <div className="contact-links">
        <a className="contact-link" href="mailto:hdbao006@gmail.com">
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

      <form ref={form} className="form">
        <input
          className={input.name.touched && !input.name.valid ? "error" : ""}
          value={input.name.value}
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={onChangeHandler}
        />
        <input
          className={input.email.touched && !input.email.valid ? "error" : ""}
          value={input.email.value}
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={onChangeHandler}
        />
        <textarea
          className={
            input.message.touched && !input.message.valid ? "error" : ""
          }
          value={input.message.value}
          name="message"
          placeholder="Enter your message"
          onChange={onChangeHandler}
        />
      </form>
      {submitButton()}
    </div>
  );
}

export default Contact;
