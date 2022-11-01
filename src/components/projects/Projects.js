import React from "react";
import styles from "./Projects.module.css";
import Card from "./cards/Card";

const Projects = () => {

    return (
        <div className={styles.display__container} id="projects">
            <h1 className={styles.display__title}>Projects</h1>
            <div className={styles.card__grid}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Projects;