import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }
  return res.json();
};

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.title,
    description: data.desc,
  };
}

const BlogDesc = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.userName}>{data.userName}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={data.img}
            alt="Image"
            height={300}
            width={500}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogDesc;
