
'use client'

import { useState } from "react";
import styles from "./form.module.scss";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    enterprise: "",
    email: "",
    phoneNumber: "",
    message: "",
    urgent: "",
    conditions: false,
  });

  const [errors, setErrors] = useState({});

  const errorMessages = {
    nameOrSurname: "Veuillez entrer deux caractères ou plus",
    emailRequired: "Veuillez entrer un email",
    invalidEmail: "Veuillez entrer un email valide",
    invalidPhoneNumber: "Veuillez entrer un numéro de téléphone valide",
    messageRequired: "Veuillez entrer un message",
    conditionsRequired: "Veuillez accepter les termes et conditions",
  };

  // Fonction pour mettre à jour les valeurs des champs
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // Fonction de validation
  function validate() {
    const newErrors = {};

    // Validation du prénom et du nom
    if (formData.name.length < 2) {
      newErrors.name = errorMessages.nameOrSurname;
    }
    if (formData.surname.length < 2) {
      newErrors.surname = errorMessages.nameOrSurname;
    }

    // Validation de l'email
    if (!formData.email) {
      newErrors.email = errorMessages.emailRequired;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = errorMessages.invalidEmail;
    }

    // Validation du numéro de téléphone
    const regexFrenchNumber = /^(\+33|0)(\s?\d{1}\s?|\s?\d{2}\s?)(\d{2}\s?){4}$/;
    const regexInternationalNumber =
      /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{8,14}$/;

    if (
      formData.phoneNumber &&
      !regexFrenchNumber.test(formData.phoneNumber) &&
      !regexInternationalNumber.test(formData.phoneNumber)
    ) {
      newErrors.phoneNumber = errorMessages.invalidPhoneNumber;
    }

    // Validation du message
    if (!formData.message) {
      newErrors.message = errorMessages.messageRequired;
    }

    // Validation des conditions
    if (!formData.conditions) {
      newErrors.conditions = errorMessages.conditionsRequired;
    }

    setErrors(newErrors);

    // Retourner true si aucune erreur, sinon false
    return Object.keys(newErrors).length === 0;
  }

  // Gestionnaire de soumission
  function handleSubmit(event) {
    event.preventDefault();

    if (validate()) {
      console.log("Formulaire soumis :", formData);

      // Reset du formulaire après soumission
      setFormData({
        name: "",
        surname: "",
        enterprise: "",
        email: "",
        phoneNumber: "",
        message: "",
        urgent: "",
        conditions: false,
      });
      setErrors({});
    }
  }

  return (
    <section className={styles.form}>
    <h2>Besoin d’un devis ou d’informations ?</h2>
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formRow}>
          <div className={styles.formItem}>
            <label htmlFor="surname">
              Nom<span>*</span>
            </label>
            <input
              name="surname"
              type="text"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
            <div className={styles.formError}>{errors.surname}</div>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="name">
              Prénom<span>*</span>
            </label>
            <input
              name="name"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className={styles.formError}>{errors.name}</div>
          </div>
        </div>

        <div className={styles.formItem}>
          <label htmlFor="email">
            E-mail<span>*</span>
          </label>
          <input
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className={styles.formError}>{errors.email}</div>
        </div>

        <div className={styles.formItem}>
          <label htmlFor="phoneNumber">Téléphone</label>
          <input
            name="phoneNumber"
            type="tel"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <div className={styles.formError}>{errors.phoneNumber}</div>
        </div>

        <div className={styles.formItem}>
          <label htmlFor="message">
            Votre message<span>*</span>
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className={styles.formError}>{errors.message}</div>
        </div>
        <div className={styles.formItem}>
          <label className={styles.checkbox} htmlFor="conditions">
            <input
              type="checkbox"
              name="conditions"
              id="conditions"
              checked={formData.conditions}
              onChange={handleChange}
              required
            />
            J’accepte que mes données soient collectées et utilisées
            conformément à la politique de confidentialité.
          </label>
          <div className={styles.formError}>{errors.conditions}</div>
        </div>

        <button className="btn btn-form" type="submit">
          Envoyer ma demande
        </button>
      </form>
    </div>
  </section>
  );
}
