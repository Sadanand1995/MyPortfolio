"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        DigitalWisperer
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/portfolio" className={styles.link}>
          Portfolio
        </Link>
        <Link href="/blog" className={styles.link}>
          Blog
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/dashboard" className={styles.link}>
          Dashboard
        </Link>
        {session.status === "authenticated" && (
          <button
            className={styles.logout}
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
