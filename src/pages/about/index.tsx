import * as Styles from "./style";

import fotoMinha from '../../assets/fotoMinha.jpeg';
import { Sociais } from "../../components/sociais";
import { useNavigate } from "react-router";



export function About() {


  const navigate = useNavigate();


  const handleContact = () => {
    navigate('/contacts');
  }



 return (
   <Styles.MainAbout>
      <Styles.ContainerInterface>      
        <Styles.ContainerImage data-aos='fade-up'>
          <Styles.Image src={fotoMinha} alt="Foto minha" />
        </Styles.ContainerImage>  
            <Styles.ContainerText data-aos='fade-down'>
              <Styles.TitleSection>Sobre mim</Styles.TitleSection>
              <Styles.TextSection>
                Olá, meu nome é
                <Styles.SpanTextSection> Jose Leandro Vilela</Styles.SpanTextSection>, tenho 22 anos e sou estudante de Sistemas de Informacoes na Universidade Federal de Uberlandia - UFU.
              </Styles.TextSection>
              
              <Styles.TextSection>
                Sou apaixonado por aprender novas tecnologias e aplicá-las de forma prática em sistemas. Estou constantemente estudando novas linguagens e ferramentas, ampliando minhas habilidades para oferecer soluções atualizadas e eficientes. Comprometo-me a garantir que meu trabalho siga as melhores práticas do mercado e esteja alinhado aos padrões de segurança e inovação da empresa. 
              </Styles.TextSection>


              <Styles.ContainerButton>
                  <Styles.Button onClick={handleContact}>
                    Entre em Contato
                  </Styles.Button>
              </Styles.ContainerButton>


              
            </Styles.ContainerText>

              <Styles.ContainerRedesSociais>
                <Sociais />
              </Styles.ContainerRedesSociais>

              


      </Styles.ContainerInterface>
   </Styles.MainAbout>
 );
}