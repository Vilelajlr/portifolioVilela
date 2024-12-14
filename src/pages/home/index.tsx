import * as Styles from "./style";
import homeBg from "../../assets/home.jpg";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router";

export function Home() {

  const navigate = useNavigate();

  const handleNavigateProject = () => {
    navigate("/projects")
  }



  return (
    <main className="relative">
      <Styles.BackgroundHome imageUrl={homeBg}></Styles.BackgroundHome>
      <Styles.Interface data-aos='fade-down'>
          <h1 className="text-3xl font-roboto font-bold text-white-light sm:text-5xl">Olá, meu nome é</h1>
          <h1 className="text-4xl font-open-sans font-bold text-red-light sm:text-6xl">José Leandro Vilela</h1>
          <p className="text-white-light text-2xl">
            Desenvolvedor{" "}
            <ReactTyped
              strings={["Front-end", "Web", "Fullstack"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </p>
        <Styles.Button onClick={handleNavigateProject}>Conheça meu trabalho</Styles.Button>

      </Styles.Interface>

    </main>
  );
}
