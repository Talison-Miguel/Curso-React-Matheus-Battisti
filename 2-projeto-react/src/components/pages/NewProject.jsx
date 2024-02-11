import { useNavigate } from 'react-router-dom';

import { ProjectForm } from '../project/ProjectForm'
import styles from './newProject.module.css'


export function NewProject() {
    const navigate = useNavigate()

    function createPost(project) {
        //initialize cost and services
        project.cost = 0
        project.service = []

        fetch('http://localhost:5000/projects', {
            method: 'Post',
            headers: {
                'Content-type': 'aplication/json',
            },
            body: JSON.stringify(project)
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            //redirect
            // navigate("/projects", { message: "Projeto criado com sucesso!" })
            navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } })
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newProjectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}