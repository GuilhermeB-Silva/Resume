import styles from './Index.module.css';

export function Objective({values:{title,text}}){

    return(

        <div className={styles.objectiveContainer}>
            <h3 className={styles.objectiveContainer__title}>{title}</h3>
            <hr className={styles.objectiveContainer__line}/>
            <p className={styles.objectiveContainer__text}>{text}</p>
        </div>
    )
}