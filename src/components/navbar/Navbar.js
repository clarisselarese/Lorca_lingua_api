import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/Logo.svg'
import languageIcon from '../../../public/Icon_language.svg'
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <>
        <nav className={styles.navbar}> 
          <Link href="/"><Image src={logo} className="logo" alt="Logo"/></Link>
          <ul>
            <li><Link href="#header" className="nav-link">Accueil</Link></li>
            <li><Link href="#about" className="nav-link">À propos</Link></li>
            <li><Link href="#services" className="nav-link">Nos services</Link></li>
            <li><button className="btn" href="#form-section">Devis / Contact</button></li>
          </ul>
          <div className={styles.languageMobile}>
            <Link href="">
              <Image
                src={languageIcon}
                alt="Icone langue"
              />FR<i className="fa-solid fa-chevron-down"></i>
            </Link>
          </div>
        </nav>
    </>
  )
}