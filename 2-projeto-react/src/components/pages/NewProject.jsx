import { ProjectForm } from '../project/ProjectForm'
import styles from './newProject.module.css'


export function NewProject() {
    return (
        <div className={styles.newProjectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar projeto"/>
        </div>
    )
}