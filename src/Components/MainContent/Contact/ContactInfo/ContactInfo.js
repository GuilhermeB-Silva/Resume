import { FaEnvelopeOpenText,FaGithub,FaLinkedin,FaDiscord,FaGlobeAmericas } from "react-icons/fa";
import { ContactItem } from "./ContactItem/ContactItem";
import data from '../../../../Data/data.json'


export function ContactInfo(){

    return(
        <>
            <ContactItem values={{Icon:FaEnvelopeOpenText,content:data.contact[0]}} linkTo="Gmail"/>
            <ContactItem values={{Icon:FaGithub,content:data.contact[1]}} linkTo="Github"/>
            <ContactItem values={{Icon:FaLinkedin,content:data.contact[2]}} linkTo="Linkedin"/>
            <ContactItem values={{Icon:FaDiscord,content:data.contact[3]}}/>
            <ContactItem values={{Icon:FaGlobeAmericas,content:data.contact[4]}}/>
        </>
    )
}