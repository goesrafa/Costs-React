import { useHistory } from "react-router-dom";
import React from "react";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject({handleSubmit, btnText, projectData}) {
  const history = useHistory();

  function createPost(project) {
    //Inicializando costs e os serviços
    project.costs = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Novo projeto</h1>
      <p>Crie o seu projeto para posteriormente adicionar seu serviço</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
