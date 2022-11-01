import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    return(
        <div className={styles.display__contact } id="contact">
            <h1 className={styles.display__title}>Contact Me</h1>
            <div className={styles.display__container}>
                Hi there, I'd like to thank you for taking a look at my personal portfolio site,
                if you wish to contact me, please feel free to send me an email at <a className={styles.display__email} href="/#">roabi.me1.2@gmail.com</a>. I'm currently
                looking for work as a Software Engineer, I will be updating this site in case I am no longer looking for work/ allready hired, 
                and of course to fix any bugs I come across. Thank you for visiting, hope to hear from you soon!. 
            </div>
        </div>
    );
};

export default Contact;