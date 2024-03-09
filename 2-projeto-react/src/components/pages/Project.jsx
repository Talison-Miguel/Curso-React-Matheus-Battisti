import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { parse, v4 as uuidv4 } from 'uuid'

import {Loading} from '../layout/Loading'
import {Container} from '../layout/Container'
import {Message} from '../layout/Message'
import {ProjectForm} from '../project/ProjectForm'

import styles from './project.module.css'
import { ServiceForm } from '../service/ServiceForm'
import { ServiceCard } from '../service/ServiceCard'


export function Project() {
    const { id } = useParams()
    const [ project, setProject ]= useState([])
    const [ services, setServices ]= useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "Get",
                headers: {
                    'Content-type': 'application/json'
                },
            }).then(response => response.json())
            .then(data => {
                setProject(data)
                setServices(data.service)
            })
            .catch(err => console.log(err))
        }, 300)
    },[id])

    function editPost(project) {
        setMessage('')
        if(project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project) 
        })
        .then(response => response.json())
        .then(data => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado')
            setType('sucess')
        })
        .catch(err => console.log(err))
    }

    function createService(projeto) {
        setMessage('')
        const lastService = project.service[project.service.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if(newCost > parseFloat(project.budget)) {
            setMessage('Orçamento utrapassado, verifique o valor do serviço!')
            setType('error')
            project.service.pop()
            return false
        }
        
        project.cost = newCost

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
            .then(response => response.json())
            .then(data => {
                setShowServiceForm(false)
            })
            .catch(err => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    function removeService(id, cost) {
        const servicesUpdated = project.service.filter(
            (item) => item.id !== id
        )

        const projectsUpdated = project

        projectsUpdated.service = servicesUpdated
        projectsUpdated.cost = parseFloat(projectsUpdated.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectsUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectsUpdated)
        }).then(response => response.json())
        .then(data => {
            setProject(projectsUpdated)
            setServices(servicesUpdated)
            setMessage('Serviço removido com sucesso')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message}/>}
                        <div className={styles.detailsContainer}>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>
                                {!showProjectForm ? 'Editar projetos' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.projectInfo}>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de orçamento:</span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Restante do orçamento:</span> R${project.budget - project.cost}
                                    </p>
                                    <p>
                                        <span>Total ultilizado:</span> R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>
                                    <ProjectForm handleSubmit={editPost} btnText={"Concluir Edição"} projectData={project}/>
                                </div>
                            )}
                        </div>
                        <div className={styles.serviceFormContainer}>
                                <h2>Adicione um serviço:</h2>
                                <button className={styles.btn} onClick={toggleServiceForm}>
                                    {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                                </button>
                                <div className={styles.projectInfo}>
                                    {
                                        showServiceForm && (
                                            <ServiceForm handleSubmit={createService} btnText={'Adicionar Serviço'} projectData={project}/>
                                        )
                                    }
                                </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {
                                services.length > 0 &&
                                services.map(service => (
                                    <ServiceCard id={service.id} name={service.name} cost={service.cost} description={service.description} key={service.id} handleRemove={removeService}/>
                                ))
                            }
                            {
                                services.length === 0 && <p>Não há serviços cadastrador</p>
                            }
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}