import portfolio from "../../assets/portfolio.png";
import lpbarber from "../../assets/lpbarber.png";
import calcClick from "../../assets/calcclick.png";
import linksDev from "../../assets/linksdev.png";
import devCurrency from "../../assets/devcurrency.png";
import onGames from "../../assets/ongames.png";
import projetoWeb from "../../assets/projetoweb.png";
import vilelajlimports from "../../assets/vilelajlimports.png";

interface ProjectType {
    id: number;
    title: string;
    description: string;
    img: string ;
    url: string;
    languages: string[];
}


let currentID = 0;
const generateID = () => {
    currentID++;
    return currentID;
}



export const projects: ProjectType[] = [

    {
        id: generateID(),
        title: "Portifolio Vilela",
        description: "Projeto do meu portifolio no github",
        img:  portfolio,
        url: "https://github.com/Vilelajlr",
        languages: ['Vite', 'React', 'TypeScript'],
    },

    {
        id: generateID(),
        title: "Lp Barber",
        description: "Projeto de uma landing page para uma Barbearia.",
        img:  lpbarber,
        url: "https://vilelacodelpbarber.vercel.app/",
        languages: ['HTML', 'CSS', 'JavaScript'],
    },
    

    {
        id: generateID(),
        title: "Calc&Click",
        description: "Site para calculos complicados para o dia a dia, como Pace, IMC e TMB.",
        img:  calcClick,
        url: "https://calculopace.vercel.app/",
        languages: ['Next', 'React', 'TypeScript', 'Tailwind'],
    },

    {
        id: generateID(),
        title: "Links Dev",
        description: "Site de links inspirado no Linktree, com BackEnd para criacao dos Links.",
        img:  linksDev,
        url: "https://linkdevvilela.vercel.app/",
        languages: ['Vite', 'React', 'TypeScript', 'Tailwind', 'Firebase'],
    },

    {
        id: generateID(),
        title: "Dev Currency",
        description: "Projeto realizado com api de criptmoedas que mostra todas as moedas, seu valores, variações no mercado, etc... ",
        img:  devCurrency,
        url: "https://projectcurrencydev.vercel.app/",
        languages: ['Vite', 'React', 'TypeScript', 'Tailwind'],
    },

    {
        id: generateID(),
        title: "On Games",
        description: "Projeto de um site de jogos básicos, realizados para estudo de desenvolvimento na faculdade.",
        img:  onGames,
        url: "https://projectcurrencydev.vercel.app/",
        languages: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    },

    {
        id: generateID(),
        title: "Blue Sky Realty",
        description: "Projeto Ganhador da maratona realizada juntamente com os alunos do projeto de desenvolvimento web da faculdade.",
        img:  projetoWeb,
        url: "https://blueskyrealty.vercel.app/",
        languages: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: generateID(),
        title: "VilelaJLImports",
        description: "Projeto de um site de loja de eletronicos para estudo de desenvolvimento frontend. Foram utilizados alem das linguagens, redux, styled-components e react-router-dom",
        img:  vilelajlimports,
        url: "https://vilelajlimports.vercel.app/",
        languages: ['Vite', 'React', 'TypeScript', 'Tailwind'],
    },

]


