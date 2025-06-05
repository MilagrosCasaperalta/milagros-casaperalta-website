import React from "react";
import { Link } from "react-router-dom";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Work in Progress...</h1>
      <Link to="/" className={styles.link}>Home</Link>
    </div>
  );
};

export default Projects;