import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className={styles.logoLink}
              >
                <img src={logo} alt="MC Logo" className={styles.logoImage} />
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about me"
                smooth={true}
                duration={500}
                className={styles.navItem}
              >
                About Me
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/wip" className={styles.navItem}>
                Projects
              </RouterLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className={styles.navItem}
              >
                Contact Me
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
