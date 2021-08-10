import { Contact } from "./Contact/Index"
import { Objective} from './Objective/Index';
import { ProfessionalExp } from "./ProfessionalExp/Index";
import { Skills } from "./Skills/Index";
import { Courses } from "./Courses/Index";

import data from "../../Data/data.json"
import styles from './Index.module.css';

export function MainContent(){


    return(
        <main className={styles.mainContainer}>
            <Contact values={{userContact:data.contact}}/>
            <Objective values={{title:"OBJETIVO",text:"Desenvolvedor front-end jr."}}/>
            <ProfessionalExp values={{title:"EXPERIÊNCIA PROFISSIONAL", professional:data.professionalExp}}/>
            <Skills/>
            <Courses/>
        </main>
    )
}