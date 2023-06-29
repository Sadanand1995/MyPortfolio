import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Pic from "../../../public/aboutPic.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={Pic} fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting Award Winning Digital Experiances
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ducimus laudantium eos ipsum eaque, officiis maxime veritatis, quo
            voluptatem mollitia repellat ut. Facere, illum repudiandae? Odio
            sunt qui dignissimos veniam distinctio, porro corrupti incidunt
            <br />
            <br />
            reprehenderit reiciendis dolorem adipisci fugiat soluta! Eos unde
            culpa voluptatem recusandae amet! Consequuntur deleniti architecto
            excepturi eligendi doloremque? Architecto eos incidunt tempora
            libero natus consequatur, perspiciatis recusandae! Minus minima
            quae?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What Do We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ducimus laudantium eos ipsum eaque, officiis maxime veritatis, quo
            voluptatem mollitia repellat ut. Facere, illum repudiandae? Odio
            sunt qui dignissimos veniam distinctio, porro corrupti incidunt
            <br />
            <br />- Lorem, ipsum dolor sit amet consectetur adipisicing.
            <br />
            <br />- Lorem, ipsum dolor sit amet consectetur adipisicing.
            <br />
            <br />- Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <Link href="/contact">
            <button className={styles.btn}>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
