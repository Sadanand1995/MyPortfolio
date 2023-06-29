import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Github from "../../../public/1.png";
import Leetcode from "../../../public/2.png";
import LinkedIn from "../../../public/3.png";
import Instagram from "../../../public/4.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©Lamamia. All rights reserved</div>
      <div className={styles.social}>
        <Image
          src={Github}
          height={25}
          width={25}
          className={styles.icon}
          alt="Github"
        />
        <Image
          src={Leetcode}
          height={25}
          width={25}
          className={styles.icon}
          alt="Leetcode"
        />
        <Image
          src={LinkedIn}
          height={25}
          width={25}
          className={styles.icon}
          alt="LinkedIn"
        />
        <Image
          src={Instagram}
          height={25}
          width={25}
          className={styles.icon}
          alt="Instagram"
        />
      </div>
    </div>
  );
};

export default Footer;
