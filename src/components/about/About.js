import React from "react";
import styles from "./About.module.css"

const About = () => {

  return (
    <div className={styles.display__about} id="about">
      <h2 className={styles.display__title}>About Me</h2>
      <div className={styles.display__content}>
        <span className="content__text">
          Computer Systems Engineer who enjoys working in software
          development, utilizing a Full-Stack environment. Skilled in problem
          solving with Java, PHP, Laravel, JavaScript, React, Node.JS, and SQL.
          Eager and focused on gaining more real world experience using
          different tech stacks, as well as honing my programming skills.
        </span>
      </div>
      <div className={styles.display__img}>
        <img src="https://media.licdn.com/dms/image/D5603AQEld5dlXnK0uw/profile-displayphoto-shrink_800_800/0/1672956859199?e=1678320000&v=beta&t=PcgDbyIDm1Vq1wQdL1mKrDj4go3FjpgbtvVJ93KRSik" alt="A photo of me" className={styles.img}></img>
      </div>
    </div>
  );
};

export default About;
