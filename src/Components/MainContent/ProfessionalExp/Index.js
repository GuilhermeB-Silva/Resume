import styles from './Index.module.css';

export function ProfessionalExp({values:{title,professional}}){

    return(
        <div className={styles.profContainer}>
            <h1 className={styles.profContainer__title}>
                {title}
            </h1>
            <hr className={styles.profContainer__line}/>

            <h1 className={styles.profContainer__jobTitle}>{professional.title}</h1>

            <p className={styles.profContainer__occupancy}>{professional.occupation}</p>
            
            <p className={styles.profContainer__description}>{professional.description}</p>

        </div>
    )
}