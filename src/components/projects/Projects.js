import React from "react";
import styles from "./Projects.module.css";
import Card from "./cards/Card";

const Projects = () => {

    return (
        <div className={styles.display__container} id="projects">
            <h1 className={styles.display__title}>Projects</h1>
            <div className={styles.card__grid}>
                <Card name="Radio" body="A web app that uses the Radio Browser API to show the user the available radio stations, which can be filtered by genre." lang="JavaScript, HTML/SCSS, React" repo="https://github.com/roelDev13/radio" page="null"/>
                <Card name="Portfolio" body="My personal portfolio web site, which you are viewing right now." lang="JavaScript, HTML/CSS, React" repo="https://github.com/roelDev13/portfolio-page" page="https://roeldev13.github.io/portfolio-page/"/>
                <Card name="Expense Tracker" body="A simple expense tracker that allows the user to set a budget, and see if the user is over or under budget." lang="JavaScript, HTML, Bootstrap, React" repo="https://github.com/roelDev13/expense-tracker" page="https://roeldev13.github.io/expense-tracker/"/>
                <Card name="Chat App" body="A chat web application built using Web Sockets, that allows 2 users to connect to a room and send messages to each other." lang="JavaScript, HTML/CSS, React, NodeJS" repo="https://github.com/roelDev13/radio" page="null"/>
            </div>
        </div>
    );
};

export default Projects;