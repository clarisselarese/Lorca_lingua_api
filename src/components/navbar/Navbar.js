"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Logo.svg";
import languageIcon from "../../../public/Icon_language.svg";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    console.log(currentScrollY)

    if (currentScrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    // Détecte si on défile vers le haut ou vers le bas
    setIsScrollingUp(currentScrollY < lastScrollY);
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""} ${
        isScrollingUp ? styles.show : styles.hide
      }`}>
        <Link href="/">
          <Image src={logo} alt="Logo"/>
        </Link>
        <ul>
          <li>
            <Link href="#header">Accueil</Link>
          </li>
          <li>
            <Link href="#about">À propos</Link>
          </li>
          <li>
            <Link href="#services">Nos services</Link>
          </li>
          <li>
            <button className="btn" href="#form-section">
              Devis / Contact
            </button>
          </li>
        </ul>
        <div className={styles.languageMobile}>
          <Link href="">
            <Image src={languageIcon} alt="Icone langue" />
            FR<i className="fa-solid fa-chevron-down"></i>
          </Link>
        </div>
      </nav>
    </>
  );
}
