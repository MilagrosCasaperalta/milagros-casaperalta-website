import React from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={styles.navItem}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about me"
                smooth={true}
                duration={500}
                className={styles.navItem}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className={styles.navItem}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={styles.navItem}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
