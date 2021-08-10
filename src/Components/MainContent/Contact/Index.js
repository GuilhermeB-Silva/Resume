import styles from './Index.module.css';
import { ContactInfo } from './ContactInfo/ContactInfo';


export function Contact(){

    return(
        <div className={styles.contactContainer}>
            <h1 className={styles.contactContainer__title}>CONTATO</h1>
            <hr className={styles.contactContainer__line}/>
            <ContactInfo/>
        </div>

    )
}