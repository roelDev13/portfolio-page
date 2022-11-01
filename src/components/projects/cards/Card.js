import React from "react";
import styles from "./Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>Radio</div>
      <div className={styles.card__body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis
        sit amet lectus ut mattis. Class aptent taciti sociosqu ad.
      </div>
      <hr className={styles.card__line} />
      <div className={styles.card__footer}>
        <span className={styles.card__languages}>Languages: </span>
        <div className={styles.card__buttons}>
        <a href="#" className={styles.card__repo}><FontAwesomeIcon icon={faGithub}/> Repo</a>
        <a href="#" className={styles.card__repo}><FontAwesomeIcon icon={faGithub}/> Page</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
