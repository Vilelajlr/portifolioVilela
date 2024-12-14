import * as Styles from "./style";
import { projects } from "./projects"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp } from 'react-icons/fa';
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMysql,SiVite } from "react-icons/si";
import { useEffect, useState } from "react";


export function ProjectCard() {


    const [sizeIcons, setSizeIcons] = useState(30);


    useEffect(() => {
        function handleResize() {
            if(window.innerWidth <= 1280) {
                setSizeIcons(15)
            } else {
                setSizeIcons(30)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, [])



    const getLanguageIcon = (language: string) =>  {
        switch(language) {
            case "HTML":
                return <FaHtml5 size={sizeIcons} color="#e34c26" />
            case "CSS":
                return <FaCss3Alt size={sizeIcons} color="#264de4" />
            case "JavaScript":
                return <FaJsSquare size={sizeIcons} color="#f0db4f" />
            case "React":
                return <FaReact size={sizeIcons} color="#61dbfb" />
            case "Next":
                return <RiNextjsLine size={sizeIcons} color="#000000" />
            case "Tailwind":
                return <RiTailwindCssFill size={sizeIcons} color="#06b6d4" />
            case "Firebase":
                return <IoLogoFirebase size={sizeIcons} color="#ffca28" />
            case "TypeScript":
                return <BiLogoTypescript size={sizeIcons} color="#3178c6" />
            case "MySQL":
                return <SiMysql size={sizeIcons} color="#00758f" />
            case "PHP":
                return <FaPhp size={sizeIcons} color="#8892be" />
            case "Vite":
                return <SiVite size={sizeIcons} color="#646cff" />
            default:
                return <FaHtml5 size={sizeIcons} color="#e34c26" />
        }
    }


 return (
    <Styles.ProjectsContainer data-aos='fade-up'>
       <Styles.Container>
        {projects.map((project) => (
                <Styles.Card key={project.id}>
                    
                    <Styles.ContainerInfos>  
                        <Styles.DivId>{project.id} <Styles.Title>. {project.title}</Styles.Title></Styles.DivId>
                        <Styles.Infos>
                            
                            <Styles.Description>{project.description}</Styles.Description>
                            <Styles.ContainerLinkLanguages>
                                <Styles.Link href={project.url} target="_blank">Acessar</Styles.Link>
                                <Styles.ContainerLanguages>
                                    <Styles.LanguageUtility>Linguagens Utilizadas</Styles.LanguageUtility>
                                    <Styles.Languages >
                                        {project.languages.map((language) => (
                                            getLanguageIcon(language)
                                        ))}
                                    </Styles.Languages>
                                </Styles.ContainerLanguages>
                            </Styles.ContainerLinkLanguages>
                        </Styles.Infos>
                    </Styles.ContainerInfos>
                    <Styles.DivImage>
                        <Styles.Image src={project.img} alt={project.title} />
                    </Styles.DivImage>
                </Styles.Card>
            ))}
       </Styles.Container>
    </Styles.ProjectsContainer>
 );
}
