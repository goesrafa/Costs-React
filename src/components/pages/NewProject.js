import React from "react";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Novo projeto</h1>
      <p>Crie o seu projeto para posteriormente adicionar seu serviço</p>
      <ProjectForm/>
    </div>
  );
}

export default NewProject;
