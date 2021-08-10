import styles from './ContactItem.module.css';
import Link from 'next/link'


export function ContactItem({linkTo,values:{Icon,content}}){

    return(
        <>
            {
                linkTo 
                ?
                <Link href={linkTo === "Gmail" ? `mailto:${content}` : `${content}`} >
                    <a className={styles.itemContainer}>
                        <Icon className={styles.itemContainer__icon}/>
                        <p className={styles.itemContainer__text}>{linkTo}</p>
                    </a>
                </Link>
                :
                <div className={styles.itemContainer}>
                    <Icon className={styles.itemContainer__icon}/>
                    <p className={styles.itemContainer__text}>{content}</p>
                </div>
            }
        </>
    )
}