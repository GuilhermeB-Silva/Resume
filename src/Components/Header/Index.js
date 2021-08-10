import styles from './Index.module.css';

export function Header(){

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContainer__centerContent}>

                <img src="/avatar.png" className={styles.headerContainer__avatar} alt="avatar logo" />

                <div className={styles.headerContainer__avatarInfo}>
                    <h3 className={styles.headerContainer__name}>{`<Guilherme Batista da Silva/>`}</h3>
                    <h5 className={styles.headerContainer__job}>{`<Front-End Jr/>`}</h5>
                </div>

            </div>
        </header>
    )
}