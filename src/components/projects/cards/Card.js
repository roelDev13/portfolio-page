import React from "react";
import styles from "./Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>{props.name}</div>
      <div className={styles.card__body}>
        {props.body}
      </div>
      <hr className={styles.card__line} />
      <div className={styles.card__footer}>
        <span className={styles.card__languages}>Languages: {props.lang}</span>
        <div className={styles.card__buttons}>
        <a href={props.repo} className={styles.card__repo}><FontAwesomeIcon icon={faGithub}/> Repo</a>
        {props.page !== "null" ?  <a href={props.page} className={styles.card__repo}><FontAwesomeIcon icon={faGithub}/> Page</a> : <p></p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
