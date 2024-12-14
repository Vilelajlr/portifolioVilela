import { useState } from "react";
import { Sociais } from "../../components/sociais";
import * as Styles from "./style";
import { toast } from "react-toastify";
import { enviarEmail } from "../../service/enviarEmail";






export function Contact() {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    



    const maxLength = 2000;
    const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const namePattern = /^[a-zA-Z]{1,}(\s[a-zA-Z]{1,})+$/;
    const messagePattern = /^[a-zA-ZÀ-ÿ0-9\s.,]{10,2000}$/;
    const emailIsValid = emailPattern.test(formData.email);
    const nameIsValid = namePattern.test(formData.name);
    const messageIsValid = messagePattern.test(formData.message);


    const handleVerification = (e: React.FormEvent) => {
        e.preventDefault();
        
        if(formData.name === '' || formData.email === '' || formData.message === ''){
            toast.error('Preencha todos os campos');
            return;
        } else if(!nameIsValid){
            toast.error('Nome inválido');
            return;
        } else if(!emailIsValid){
            toast.error('E-mail inválido');
            return;
        } else if(!messageIsValid){
            toast.error('Mensagem inválida');
            return;
        }

        

        handleRequisicion();

    }

    const handleFormEdit = (e: React.ChangeEvent, name: string) => {
        setFormData({...formData, [name]: (e.target as HTMLInputElement).value});
    }

    
    const handleRequisicion = async () => {
        try {
            const response = await enviarEmail(formData.name, formData.email, formData.message);
            console.log(response);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            toast.success('Mensagem enviada com sucesso');
        } catch (error) {
            console.error('Error ao enviar email', error);
            toast.error('Error ao enviar email');
        }
    }




    return (
      <Styles.MainContact>
        <Styles.ContainerInterface>


            <Styles.Infos data-aos='fade-right'>
                <Styles.ContainerTitle data-aos='fade-down'>
                    <Styles.Title>Contato</Styles.Title>
                    <Styles.Text>Entre em contato comigo para saber mais sobre meus projetos e experiências.</Styles.Text>
                </Styles.ContainerTitle>

                <Styles.ContainerTitle>
                    <Styles.SubTitle>Telefone</Styles.SubTitle>
                    <Styles.Text>(34) 9 99905-1004</Styles.Text>
                </Styles.ContainerTitle>

                <Styles.ContainerTitle>
                    <Styles.SubTitle>Redes Sociais</Styles.SubTitle>
                    <Styles.ContainerSociais>
                        <Sociais  />
                    </Styles.ContainerSociais>
                </Styles.ContainerTitle>

            </Styles.Infos>


            <Styles.Form onSubmit={handleVerification}>
                <Styles.ContainerTitle data-aos='fade-left'>
                    <Styles.Title>Entre em Contato</Styles.Title>
                    <Styles.Text>Preencha o formulário abaixo para enviar uma mensagem direta para o meu e-mail.</Styles.Text>
                </Styles.ContainerTitle>
                <Styles.ContainerInput data-aos='fade-up' delay-aos-delay='300'>
                    <Styles.Input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={(e) => handleFormEdit(e, 'name')}
                        required
                        
                    />
                    <Styles.Label htmlFor="name">Nome</Styles.Label>
                </Styles.ContainerInput>
                <Styles.ContainerInput data-aos='fade-up'>
                    <Styles.Input 
                        type="text" 
                        name="email" 
                        value={formData.email}
                        onChange={(e) => handleFormEdit(e, 'email')}
                        required
                    />
                    <Styles.Label htmlFor="email">E-mail</Styles.Label>
                </Styles.ContainerInput>
                <Styles.ContainerInput data-aos='fade-up'>
                    <Styles.TextArea 
                        name="message" 
                        value={formData.message}
                        onChange={(e) => handleFormEdit(e, 'message')}
                        cols={30}
                        rows={10}
                        maxLength={maxLength}
                        required
                        
                    />
                    <Styles.Label htmlFor="message">Mensagem</Styles.Label>
                    <Styles.Counter>{formData.message.length}/{maxLength}</Styles.Counter>
                </Styles.ContainerInput>


                <Styles.Button type="submit">Enviar</Styles.Button>



            </Styles.Form>
        </Styles.ContainerInterface>
      </Styles.MainContact>
    );
   }