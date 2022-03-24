import "./contact.scss";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";

export default function Contact() {
  const [modal, setModal] = useState(false);

  const handleClick = (e) => {
    const clickedId = e.target.id;

    if (modal && clickedId != "modal-popup" && clickedId != "modal-message") {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const contactForm = useRef();

  const formSubmit = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //     contactForm.current,
    //     process.env.REACT_APP_EMAILJS_USER_ID
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    setModal(true);
  };

  return (
    <div className="contact" id="contact">
      <Modal modal={modal} setModal={setModal} />
      <div className="title">Contact.</div>
      <form ref={contactForm} className="contact-form" onSubmit={formSubmit}>
        <div className="form-element">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="contact_name"
            placeholder="Your name"
            required
          ></input>
        </div>
        <div className="form-element">
          <label for="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="contact_email"
            placeholder="Your e-mail"
            required
          ></input>
        </div>
        <div className="form-element">
          <label for="message">Message</label>
          <textarea
            rows="5"
            id="message"
            name="contact_message"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <div className="form-element">
          <button>Submit</button>
        </div>
      </form>
      <div className="title"></div>
    </div>
  );
}
