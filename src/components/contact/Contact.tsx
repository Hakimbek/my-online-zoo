import contactImage from '../../assets/images/contact.png';
import { RightArrowIcon } from '../icons';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css';

export const Contact = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  const isFormInvalid =
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim() ||
    nameError ||
    emailError ||
    subjectError ||
    messageError;

  const checkNameBlur = () => {
    if (!name.trim()) {
      setNameError(t('contact.errors.required'));
    } else {
      setNameError('');
    }
  };

  const checkEmailBlur = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.trim()) {
      setEmailError(t('contact.errors.required'));
    } else if (!emailRegex.test(email)) {
      setEmailError(t('contact.errors.invalid_email'));
    } else {
      setEmailError('');
    }
  };

  const checkSubjectBlur = () => {
    if (!subject.trim()) {
      setSubjectError(t('contact.errors.required'));
    } else {
      setSubjectError('');
    }
  };

  const checkMessageBlur = () => {
    if (!message.trim()) {
      setMessageError(t('contact.errors.required'));
    } else {
      setMessageError('');
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setName(val);

    if (val.trim().length > 0) {
      setNameError('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);

    const emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(val)) {
      setEmailError('');
    }
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSubject(val);

    if (val.trim().length > 0) {
      setSubjectError('');
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setMessage(val);

    if (val.trim().length > 0) {
      setMessageError('');
    }
  };

  return (
    <section className={styles.contact}>
      <img
        className={styles.contactImage}
        src={contactImage}
        alt="Contact image"
      />
      <div className={styles.contactWrapper}>
        <div className={styles.content}>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.text')}</p>
        </div>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">
              <span>*</span> {t('contact.name')}
            </label>
            <input
              id="name"
              type="text"
              placeholder={t('contact.placeholders.name')}
              value={name}
              onChange={handleNameChange}
              onBlur={checkNameBlur}
            />
            <span className={styles.error}>{nameError}</span>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              <span>*</span> {t('contact.email')}
            </label>
            <input
              id="email"
              type="text"
              placeholder={t('contact.placeholders.email')}
              value={email}
              onChange={handleEmailChange}
              onBlur={checkEmailBlur}
            />
            <span className={styles.error}>{emailError}</span>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="subject">
              <span>*</span> {t('contact.subject')}
            </label>
            <input
              id="subject"
              type="text"
              placeholder={t('contact.placeholders.subject')}
              value={subject}
              onChange={handleSubjectChange}
              onBlur={checkSubjectBlur}
            />
            <span className={styles.error}>{subjectError}</span>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">
              <span>*</span> {t('contact.message')}
            </label>
            <textarea
              id="message"
              placeholder={t('contact.placeholders.message')}
              value={message}
              onChange={handleMessageChange}
              onBlur={checkMessageBlur}
            ></textarea>
            <span className={styles.error}>{messageError}</span>
          </div>
          <button
            className={styles.submitButton}
            disabled={Boolean(isFormInvalid)}
          >
            {t('contact.send')}
            <RightArrowIcon />
          </button>
        </form>
      </div>
    </section>
  );
};
