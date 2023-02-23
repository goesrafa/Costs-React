import styles from './ProjectForm.module.css';

function ProjectForm() {
  return (
    <form className={styles.form}>
      <div>
        <input type="text" placeholder="Insira o nome do projetos" />
      </div>
      <div>
        <input type="number" placeholder="Orçamento total" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>
            Selecione a categoria
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Inserir o projet" />
      </div>
    </form>
  );
}

export default ProjectForm;
