import Image from "next/image";
import about from "../../../public/About.png";
import styles from "./about.module.scss";

export default function About() {
  return (
      <section className={styles.section}>
        <div className={styles.aboutLeft}>
          <Image
            src={about}
            alt="Photo d'une femme qui travaille sur son ordinateur"
          />
        </div>
        <div className={styles.aboutRight}>
          <h2>À propos</h2>
          <p>
            Interprète et traductrice expérimentée, je mets à votre service une
            solide expertise développée lors de missions auprès d&apos;institutions
            telles que la Police Nationale, la Cour Nationale du Droit d&apos;Asile
            et des hôpitaux en France et aux États-Unis.
            <br />
            Titulaire d&apos;un Master en Langues Étrangères Appliquées de
            l&apos;Université Paris Diderot, d&apos;une formation en anglais en Irlande,
            ainsi que d&apos;un Bac + 5 en Sciences Sociales obtenu en espagnol, je
            garantis des échanges clairs et fidèles, en respectant les nuances
            culturelles tout en assurant une communication efficace en français,
            anglais et espagnol.
          </p>
        </div>
      </section>
  );
}
