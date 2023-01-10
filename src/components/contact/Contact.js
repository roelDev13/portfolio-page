import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    return(
        <div className={styles.display__contact } id="contact">
            <h1 className={styles.display__title}>Contact Me</h1>
            <div className={styles.display__container}>
                Hi there, I'd like to thank you for taking a look at my personal portfolio site,
                if you wish to contact me, please feel free to send me an email at <a className={styles.display__email} href="mailto:roabi.me1.2@gmail.com">roabi.me1.2@gmail.com</a>. I'm currently
                looking for work as a Software Engineer, I will be updating this site in case I have found some personal bugs or added new content.
                 Thank you for visiting my personal portfolio, hope to hear from you soon!. 
            </div>
        </div>
    );
};

export default Contact;