import { useLocation } from 'react-router-dom'
import { Message } from "../layout/Message";

import { Container } from '../layout/Container'
import { LinkButton } from '../layout/LinkButton'

import styles from './projects.module.css'
import { ProjectCard } from '../project/ProjectCard';
import { useEffect, useState } from 'react';

export function Projects() {
    const [projects, setProjects] = useState([])
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'Get',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setProjects(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id))
                setProjectMessage('Projeto removido com sucesso!')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar Projetos'>Criar Projeto</LinkButton>
            </div>
            {message && <Message msg={message} type="sucess"/>}
            {projectMessage && <Message msg={projectMessage} type="sucess"/>}
            <Container customClass="start">
                {
                    projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard 
                            name={project.name} 
                            id={project.id} 
                            budget={project.budget} 
                            category={project.category.name} 
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))
                }
            </Container>
        </div>
    )
}