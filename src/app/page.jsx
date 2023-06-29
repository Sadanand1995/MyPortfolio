import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design For Your Digital Products.
        </h1>
        <p className={styles.desc}>
          Turning your idea into reality. We bring together teams from global
          tech industry
        </p>
        <Link href="/portfolio">
          <button className={styles.btn}>See Our Works</button>
        </Link>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Home Page Image" className={styles.img} />
      </div>
    </div>
  );
}
