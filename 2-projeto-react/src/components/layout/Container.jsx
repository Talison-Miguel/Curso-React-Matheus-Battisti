import styles from './container.module.css'

export function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}