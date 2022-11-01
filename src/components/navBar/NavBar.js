import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [active, setActive] = useState(styles.nav__menu);
  // const {ref1,ref2,ref3} = ref;
  // const {aboutRef, projectsRef, skillsRef} = ref;
  
  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  // const handleScroll = (elemRef) => {
  //   console.log("ref: " + JSON.stringify(elemRef));
  //   window.scrollTo({
  //     top: elemRef.current.offsetTop,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };

  const navHandler = () => {
    active === styles.nav__menu
      ? setActive(`${styles.nav__menu} ${styles.nav__active}`)
      : setActive(styles.nav__menu);
  };
  return (
    <nav className={styles.nav}>
      <a href="/#" className={styles.name}>
        {"<RoelDev />"}
      </a>
      <ul className={active}>
        <li className={styles.nav__item} >
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className={styles.nav__item} >
          <a href="/#" className="nav__link">
            Resume
          </a>
        </li>
        <li className={styles.nav__item} >
          <Link to="projects" spy={true} smooth={true} offset={50} duration={500} >
            Projects
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500} >
            Skills
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={navHandler} className={styles.nav__toggler}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;
