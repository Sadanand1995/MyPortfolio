"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import styles from "./page.module.css";
import Projects from "../../../components/works/Works";
import { items } from "./data";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = () => {
  const params = useParams();
  console.log(params);
  const data = getData(params.category);
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <Projects
          id={data.id}
          title={item.title}
          desc={item.desc}
          url="#"
          imgSrc={item.image}
        />
      ))}
    </div>
  );
};

export default Category;
