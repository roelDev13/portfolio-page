import React from "react";
import styles from "./Soft.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faPeoplePulling } from '@fortawesome/free-solid-svg-icons';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';

const Soft = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row__division}>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faUsers} className={styles.font__logo} />
                    <span className={styles.logo__name}>Leadership</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faPeopleCarryBox} className={`${styles.font__logo} ${styles.js}`} />
                    <span className={styles.logo__name}>Teamwork</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faUserGear} className={styles.font__logo} />
                    <span className={styles.logo__name}>Problem Solving</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faUserNinja} className={styles.font__logo} />
                    <span className={styles.logo__name}>Adaptability</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faPersonChalkboard} className={styles.font__logo} />
                    <span className={styles.logo__name}>Communication</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faUserPen} className={styles.font__logo} />
                    <span className={styles.logo__name}>Organization</span>
                </div>
                </div>

                <div className={styles.row__division}>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faPeoplePulling} className={styles.font__logo} />
                    <span className={styles.logo__name}>Motivation</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faUserPlus} className={styles.font__logo} />
                    <span className={styles.logo__name}>Accepting Criticism</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faRocket} className={styles.font__logo} />
                    <span className={styles.logo__name}>Creativity</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faUserGraduate} className={styles.font__logo} />
                    <span className={styles.logo__name}>Desire to Learn</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faBook} className={styles.font__logo} />
                    <span className={styles.logo__name}>Research Skills</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faPeopleArrows} className={styles.font__logo} />
                    <span className={styles.logo__name}>Multitasking</span>
                </div>
                </div>
        </div>
    );
}

export default Soft;