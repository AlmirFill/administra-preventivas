import { CardOrdem } from '../CardOrdem'
import styles from './styles.module.scss'

export function ListOrdem(props) {
    const test = [
        <>
            {props.ordens.map((ordem, index) => <CardOrdem os={index} title={ordem.title} desc={ordem.desc} />)}
        </>
    ]
    return (
        <div className={styles.grid}>
            {test}
        </div>
    )
}