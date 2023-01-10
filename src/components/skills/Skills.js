import React, { useState } from "react";
import styles from "./Skills.module.css"
import Technical from "./technical/Technical";
import Soft from "./soft/Soft";

const Skills = () => {
    const [skill, setSkill] = useState(true);
    return (
        <div className={styles.display__skills} id="skills" >
            <h1 className={styles.display__title}>Skills</h1>
            <div className={styles.display__skillTitles}>
                { skill ? <button className={styles.tech__skills__selected} onClick={() => { setSkill(true); }}>Technical Skills</button> : <button className={styles.tech__skills} onClick={() => { setSkill(true); }}>Technical Skills</button>}
                { !skill ? <button className={styles.soft__skills__selected} onClick={() => { setSkill(false); }} >Soft Skills</button> : <button className={styles.soft__skills} onClick={() => { setSkill(false); }} >Soft Skills</button> }
            </div>
            <div className={styles.display__screen}>
                { skill ? <Technical /> : <Soft />}
            </div>
        </div>
    );
}; 

export default Skills; 