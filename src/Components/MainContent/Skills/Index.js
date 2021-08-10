import styles from './Index.module.css';
import data from '../../../Data/data.json';

export function Skills(){

    return(
        <div className={styles.skillsContainer}>
            <h1 className={styles.skillsContainer__title}>SKILLS</h1>
            <hr className={styles.skillsContainer__line}/>

            <ul className={styles.skillsContainer__listContainer}>
                {
                    data.skills.map(skill=>(
                        <li className={styles.skillsContainer__list}>{skill}</li>

                    ))
                }
            </ul>


        </div>
    )
}