import Link from "next/link";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Services professionnels <br />
            d&apos;interprétation et de traduction
          </h1>
          <p className="lead">
            Grâce à mon expertise multilingue, je facilite vos échanges en
            français, anglais et espagnol. Basée à Strasbourg, je me déplace
            selon vos besoins pour des solutions linguistiques sur mesure.
          </p>
          <Link className="btn" href="#form-section">
            Je demande mon devis
          </Link>
        </div>
      </div>
    </>
  );
}
