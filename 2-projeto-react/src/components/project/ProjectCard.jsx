import { Link } from 'react-router-dom'
import styles from './projectCard.module.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

export function ProjectCard({id, name, budget, category, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.projectCard}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.categoryText}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.projectCardActions}>
                <Link to={'/'}><span><BsPencil /> Editar</span></Link>
                <button onClick={remove}>
                    <span><BsFillTrashFill /> Remover</span>
                </button>
            </div>
        </div>
    )
}