import React from "react";
import styles from "./works.module.css";
import Link from "next/link";
import Image from "next/image";

const Websites = ({ url, title, desc, imgSrc, id }) => {
  return (
    <div className={styles.item} key={id}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <Link href={url}>
          <button className={styles.btn}>See More</button>
        </Link>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} fill={true} src={imgSrc} alt="Image" />
      </div>
    </div>
  );
};

export default Websites;
