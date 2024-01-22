import { Link } from 'react-router-dom'

import { Container } from './Container'

import styles from './navbar.module.css'
import logo from '../../img/costs_logo.png'

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt="Costs" /></Link>
                <ul className={styles.list}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projetos</Link></li>
                    <li><Link to='/'>Empresa</Link></li>
                    <li><Link to='/contatc'>Contato</Link></li>
                </ul>
                {/* <Link to='/newproject'>Novo Projeto</Link>   */}
            </Container>
        </nav>
    )
}