import styles from "./form.module.scss";

export default function Form() {
  return (
    <section className={styles.form}>
      <h2>Besoin d’un devis ou d’informations ?</h2>
      <div className={styles.formContainer}>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          id="contact-form"
          noValidate
        >
          <input
            type="hidden"
            name="access_key"
            value="56fbb36f-adc5-4c89-a35f-09955339c824"
          />
          <div className={styles.formRow}>
            <div className={styles.formItem}>
              <label htmlFor="surname">
                Nom<span>*</span>
              </label>
              <input
                name="surname"
                type="text"
                id="surname"
                placeholder=""
                required
              />
              <div className={styles.formError} id="surnameError"></div>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="name">
                Prénom<span>*</span>
              </label>
              <input
                name="name"
                type="text"
                id="name"
                placeholder=""
                required
              />
              <div className={styles.formError} id="nameError"></div>
            </div>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="enterprise">Entreprise / Organisation</label>
            <input
              name="enterprise"
              type="text"
              id="enterprise"
              placeholder=""
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.formItem}>
              <label htmlFor="email">
                E-mail<span>*</span>
              </label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder=""
                required
              />
              <div className={styles.formError} id="emailError"></div>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="phoneNumber">Téléphone</label>
              <input
                name="phoneNumber"
                type="tel"
                id="phoneNumber"
                placeholder=""
              />
              <div className={styles.formError} id="phoneNumberError"></div>
            </div>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="message">
              Votre message<span>*</span>
            </label>
            <textarea
              name="message"
              id="message"
              placeholder=""
              required
            ></textarea>
            <div className={styles.formError} id="messageError"></div>
          </div>
          <div className={styles.formItem}>
            <label>S’agit-il d’une demande urgente?</label>
            <div className={styles.radioGroup}>
              <div className={styles.yes}>
                <input type="radio" id="yes" name="urgent" value="yes" />
                <label className={styles.radio} htmlFor="yes">
                  Oui
                </label>
              </div>
              <div className={styles.no}>
                <input type="radio" id="no" name="urgent" value="no" />
                <label className={styles.radio} htmlFor="no">
                  Non
                </label>
              </div>
            </div>
          </div>
          <div className={styles.formItem}>
            <label className={styles.checkbox} htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" required />
              J’accepte que mes données soient collectées et utilisées
              conformément à la politique de confidentialité.
            </label>
            <div className={styles.formError} id={styles.checkboxError}></div>
          </div>
          <div className="btn-container">
            <button className="btn btn-form" type="submit">
              Envoyer ma demande
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
