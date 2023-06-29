import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Img from "../../../public/contact.png";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Get in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={Img}
            className={styles.img}
            fill={true}
            alt="ContactImg"
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.btn} url="#">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
