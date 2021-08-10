import data from '../../../Data/data.json';
import styles from './Index.module.css';

export function Courses(){


    return(
        <div className={styles.coursesContainer}>
            <h1 className={styles.coursesContainer__title}>QUALIFICAÇÕES</h1>
            <hr className={styles.coursesContainer__line}/>
            <ul className={styles.coursesContainer__contList}>
                {
                    data.courses.map(course=>(
                        <li key={course} className={styles.coursesContainer__list}>{course}</li>
                    ))
                }
            </ul>
        </div>
    )
}