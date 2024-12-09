import Image from 'next/image'
import styles from "./services.module.scss";
import interpretationIcon1 from '@/../public/Icon_Interpretation_1.svg'
import interpretationIcon2 from '@/../public/Icon_Interpretation_2.svg'
import interpretationIcon3 from '@/../public/Icon_Interpretation_3.svg'
import interpretationIcon4 from '@/../public/Icon_Interpretation_4.svg'

export default function Services() {
  return (
    <section className={styles.servicesSection}>
    <div className={styles.upContainer}>
      <h2>Services d&apos;interprétation</h2>
      <p className="lead">
        Réunion professionnelle, sortie culturelle, rendez-vous
        administratif, événement multilingue ? J&apos;interprète en espagnol,
        français et anglais pour garantir le succès de vos échanges
        interculturels. N&apos;hésitez pas à me contacter pour choisir la
        technique la plus adaptée à vos besoins :
      </p>
      <div className={styles.interBoxes}>
        <div>
          <Image
            src={interpretationIcon1}
            alt="Icone trois personnes qui parlent"
          />
          <h3>
            Interprétation <br />
            de liaison
          </h3>
          <p>
            <span>En petit comité,</span> je facilite vos
            échanges en traduisant phrase par phrase en alternance avec
            l&apos;intervenant. Ce service permet un dialogue fluide et naturel,
            renforçant la communication humaine au cœur de vos réunions.
          </p>
        </div>
        <div>
          <Image
            src={interpretationIcon2}
            alt="Icone une personne qui parle à d'autres personnes"
          />
          <h3>
            Interprétation <br />
            consécutive
          </h3>
          <p>
            Lors d’une prise de parole
            <span> devant une audience,</span> je prends
            des notes pour restituer ensuite le discours dans la langue
            cible avec précision, tout en intégrant les nuances et les
            éléments culturels du message.
          </p>
        </div>
        <div>
          <Image
            src={interpretationIcon3}
            alt="Icone une personne qui parle avec un casque"
          />
          <h3>
            Interprétation <br />
            simultanée
          </h3>
          <p>
            Pendant que l&apos;orateur parle, je traduis <span>
              en temps réel </span>
            grâce à des équipements adaptés (casques, micros, cabines). Ce
            service permet une compréhension sans interruptions, en
            préservant le rythme de l&apos;événement.
          </p>
        </div>
        <div>
          <Image
            src={interpretationIcon4}
            alt="Icone deux personnes qui parlent en visio"
          />
          <h3>Par téléphone et en visioconférence</h3>
          <p>
            Que ce soit sur Zoom, Teams ou toute autre plateforme, je vous
            accompagne <span> à distance</span> pour
            garantir des échanges clairs et efficaces dans un contexte
            multilingue.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.downContainer}>
      <div>
        <h2>Services de traduction</h2>
        <p className="lead">
          Page web, contenu marketing, rapports internes ou documents
          personnels: je m&apos;assure que vos documents soient traduits avec
          précision, en respectant les nuances et les spécificités de chaque
          demande.
        </p>
      </div>
      <div>
        <h2>Autres services</h2>
        <p className="lead">
          Je propose des services de correction, relecture et transcription
          (simple ou traduite) pour assurer la précision et la qualité de
          vos documents.
        </p>
      </div>
    </div>
  </section>
  )
}