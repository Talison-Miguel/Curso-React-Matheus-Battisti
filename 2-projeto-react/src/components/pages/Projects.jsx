import { useLocation } from 'react-router-dom'
import { Message } from "../layout/Message";

import { Container } from '../layout/Container'
import { LinkButton } from '../layout/LinkButton'

import styles from './projects.module.css'

export function Projects() {
    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar Projetos'>Criar Projeto</LinkButton>
            </div>
            {message && <Message msg={message} type="sucess"/>}
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
        </div>
    )
}