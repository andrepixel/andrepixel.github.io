import { LogoGithub, LogoLinkedin, GlobeOutline } from "react-ionicons";
import styles from "./Main.module.css";

export function Main() {
  return (
    <main>
      <article className={styles.profile}>
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/47698724?v=4"
            alt="profile photo of André"
          />
        </figure>
        <span>@andrepixel</span>
      </article>
      <article className={styles.links}>
        <ul>
          <a
            href="https://blogac.me/guia-de-sobrevivencia-da-ti-5-dicas-de-ciberseguranca-para-sua-empresa/"
            target="_blank"
          >
            <li>Dicas de sobrevivência de TI</li>
          </a>

          <a
            href="https://www.iberdrola.com/talentos/beneficios-videogames-aprendizagem#:~:text=No%20entanto%2C%20os%20benef%C3%ADcios%20dos,o%20desenvolvimento%20das%20habilidades%20cognitivas."
            target="_blank"
          >
            <li>A importância dos Videogames</li>
          </a>

          <a
            href="https://canaltech.com.br/curiosidades/tecnologias-de-star-trek-que-ja-existem-ou-quase-116614/"
            target="_blank"
          >
            <li>Star Trek e a Tecnologia</li>
          </a>
        </ul>
      </article>
      <article className={styles.socialMedia}>
        <a href="#">
          <GlobeOutline color="white" width="2em" height="2em"/>
        </a>
        <a href="https://github.com/andrepixel" target="_blank">
          <LogoGithub color="white" width="2em" height="2em"/>
        </a>
        <a
          href="https://www.linkedin.com/in/andrevalverdebrazil/"
          target="_blank"
        >
          <LogoLinkedin color="white" width="2em" height="2em"/>
        </a>
      </article>
    </main>
  );
}
