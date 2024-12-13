import Image from "next/image";
import Link from 'next/link'
import logo from "../../../public/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <div  className={styles.footerContainer}>
          <div>
            <Image src={logo} alt="Logo" />
            <p className={styles.emailFooter}>
              Email:
              <Link href="mailto:c.lorca.garcia@outlook.fr"> c.lorca.garcia<span className={styles.arobase}>@</span>outlook.fr</Link>
            </p>
            <p>Téléphone: 07 68 24 92 64</p>
          </div>
          <div  className={styles.footerRight}>
            <div  className={styles.linkedin}>
              <p>
                Suivez nous <br />
                sur Linkedin
              </p>
              <Link className={styles.linkedinIcon}
                href="https://fr.linkedin.com/in/cathereen-lorca-garcia"
                target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
            </div>
            <div  className={styles.legalContainer}>
              <p>© LORCA LINGUA</p>
              <div  className={styles.legalGroup}>
                <Link href="./legal-information.html">Mentions légales</Link>
                <Link href="./privacy-policy.html">Politique de confidentialité</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
