import styles from './styles.module.scss'

export function CardOrdem(props) {
    return (
        <div className={styles.container}>
            <span>{props.os}</span>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}