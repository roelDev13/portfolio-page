import React from "react";
import styles from "./Welcome.module.css";
import NavBar from "../navBar/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Welcome = () => {
    return(
        <div className={styles.container}>
            <NavBar />
            <div className={styles.container__display}>
                <h1 className={styles.display__name}>Roel A. Montoya</h1>
                <div className={styles.display__quote}>
                    <span className={styles.quote__1}>Whatever Your Mind Can Conceive and Believe, It Can Achieve.</span> 
                </div>
                <div className={styles.display__logos}>
                    <a target="_blank" href="https://github.com/roelDev13">
                    <FontAwesomeIcon icon={faGithub} className={styles.github__logo} size="3x" inverse/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/roel-montoya/">
                    <FontAwesomeIcon icon={faLinkedin} className={styles.github__logo} size="3x" inverse/>
                    </a>
                </div>
                <a className={styles.display__resume} href="https://drive.google.com/file/d/1lsRWp2GGCtRTH-FzX9yb4CmI6gdQX7_e/view?usp=sharing">My Resume</a>
            </div>
        </div>
    );
};

export default Welcome;