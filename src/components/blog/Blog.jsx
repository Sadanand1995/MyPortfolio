import Link from "next/link";
import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";

const Blog = ({ imgSrc, title, desc, id }) => {
  return (
    <Link href={`/blog/${id}`} className={styles.container} key={id}>
      <div className={styles.imgContainer}>
        <Image
          src={imgSrc}
          alt="Image"
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
      </div>
    </Link>
  );
};

export default Blog;
