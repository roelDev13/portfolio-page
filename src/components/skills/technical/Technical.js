import React from "react";
import styles from "./Technical.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt} from '@fortawesome/free-brands-svg-icons';
import { faJsSquare} from '@fortawesome/free-brands-svg-icons';
import { faJava} from '@fortawesome/free-brands-svg-icons';
import { faPhp} from '@fortawesome/free-brands-svg-icons';
import { faHtml5} from '@fortawesome/free-brands-svg-icons';
import { faCss3} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faSalesforce } from '@fortawesome/free-brands-svg-icons';

const Technical = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.row__division} ${styles.first__row}`}>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faGitAlt} className={styles.font__logo} />
                    <span className={styles.logo__name}>Git</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faJsSquare} className={`${styles.font__logo} ${styles.js}`} />
                    <span className={styles.logo__name}>JavaScript</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faJava} className={styles.font__logo} />
                    <span className={styles.logo__name}>Java</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faPhp} className={styles.font__logo} />
                    <span className={styles.logo__name}>PHP</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faHtml5} className={styles.font__logo} />
                    <span className={styles.logo__name}>HTML5</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faCss3} className={styles.font__logo} />
                    <span className={styles.logo__name}>CSS</span>
                </div>
                </div>

                <div className={styles.row__division}>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faDatabase} className={styles.font__logo} />
                    <span className={styles.logo__name}>SQL</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faPython} className={styles.font__logo} />
                    <span className={styles.logo__name}>Python</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faReact} className={styles.font__logo} />
                    <span className={styles.logo__name}>React</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faNodeJs} className={styles.font__logo} />
                    <span className={styles.logo__name}>NodeJS</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faLaravel} className={styles.font__logo} />
                    <span className={styles.logo__name}>Laravel</span>
                </div>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faSalesforce} className={styles.font__logo} />
                    <span className={styles.logo__name}>Salesforce</span>
                </div>
                </div>
        </div>
    );
}

export default Technical;