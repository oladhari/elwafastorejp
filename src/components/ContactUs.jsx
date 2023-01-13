import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import styles from "../style";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2g19wi8",
        "template_zl74kij",
        form.current,
        "UQ6-saeNCRP6tWDkz"
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
    <form
      className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      ref={form}
      onSubmit={sendEmail}
    >
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="reply_to" />
      <label>Message</label>
      <textarea name="message" />
      <input
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        type="submit"
        value="Send"
      />
    </form>
  );
};

export default ContactUs;
