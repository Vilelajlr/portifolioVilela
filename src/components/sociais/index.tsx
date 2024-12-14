import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { sociais } from "./sociaisType";



export function Sociais() {

    const getRedeSocialIcon = (redeSocial: string) =>  {
        switch(redeSocial) {
            case "Instagram":
                return <FaInstagram size={30} color="#e34c26" />
            case "github":
                return <FaGithub size={30} color="#003042" />
            case "linkedin":
                return <FaLinkedinIn size={30} color="#264de4" />   
            default:
                return <FaInstagram size={30} color="#e34c26" />
        }
    }



 return (
   <>
    {sociais.map((social) => (
        <a key={social.icon} href={social.link} target="_blank">
            {getRedeSocialIcon(social.icon)}
        </a>
    ))}
   </>
 );
}