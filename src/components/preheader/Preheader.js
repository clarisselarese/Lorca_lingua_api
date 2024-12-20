import Image from 'next/image'
import Link from 'next/link'
import emailIcon from '@/../public/Icon_email.svg'
import phoneIcon from '@/../public/Icon_phone.svg'
import languageIcon from '@/../public/Icon_language.svg'
import styles from './preheader.module.scss';

export default function Preheader() {
  return (
    <div className ={styles.preheader}> 
        <div className ={styles.preheaderContent}>
          <div className ={styles.contact}>
            <div className={styles.email}>
                <Image src={emailIcon} alt="Icône email" />
                <Link href="mailto:c.lorca.garcia@outlook.fr"
                  >c.lorca.garcia<span className ={styles.arobase}>@</span>outlook.fr</Link>
            </div>
            <div className ={styles.phone}>
                <Image
                  src={phoneIcon}
                  alt="Icone téléphone"/>
                <span>07 68 24 92 64</span>
            </div>
          </div>
          <div className ={styles.language}>
            <Link href="">
              <Image
                src={languageIcon}
                alt="Icone langue"
              />FR<i className ="fa-solid fa-chevron-down"></i>
            </Link>
          </div>
        </div>
      </div>
  )
}