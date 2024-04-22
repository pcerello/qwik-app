import { component$, useStyles$ } from "@builder.io/qwik";
import Image from "../assets/girl.png?jsx";
import styles from "./index.scss?inline";
import Evo from "../assets/evo.jpg?jsx";
import Fond from "../assets/fond.png?jsx";

export default component$(() => {
  useStyles$(styles);
  return (
    <div id="page-content">
      <div class="intro">
        <div class="description">
          <h1>Je suis Pauline, développeuse web, passionnée par la vie !</h1>
          <p>
            Bienvenue sur mon portfolio ! Explorez mon parcours dans le développement web et découvrez ma passion pour la vie à travers mes aventures. Malgré
            les obstacles rencontrés, je me bats pour vivre ma passion.
          </p>
        </div>
        <div class="trailer">
          <div class="down">
            <Image style={{ width: "340px", height: "340px" }} />
          </div>
          <div class="up">
            <div class="trailerText">Projets</div>
            <div class="trailerText short">Skills</div>
            <div class="trailerText">Expériences</div>
          </div>
        </div>
      </div>
      <div class="spaceline"></div>
      <div class="topSkills">
        <div class="skill">HTML</div>
        <div class="skill">
          <p>SCSS</p>
        </div>
        <div class="skill">
          <p>TypeScript</p>
        </div>
        <div class="skill">
          <p>Qwik</p>
        </div>
        <div class="skill">
          <p>React</p>
        </div>
      </div>
      <div class="spaceline"></div>

      <div class="blabla">
        <div class="blablaText">Grâce à mes études et à mon parcours, j'ai acquis à la fois des compétences techniques et des savoirs-être indispensables.</div>

        <div class="blablaImg">
          <div class="fond">
            <Fond style={{ width: "296px", height: "296px" }} />
          </div>
          <div class="img">
            <Evo style={{ width: "864px", height: "440px" }} />
          </div>
          <div class="text">Adaptabilité</div>
        </div>
      </div>
      <div class="otherSkills">
        <div class="header">
          <div class="title">Quelques compétences</div>
          <div class="button">Voir tout</div>
        </div>

        <div class="skills">
          <div class="row">
            <div class="cell">
              <div class="number">01</div>
              <div class="spaceline"></div>
              <div class="skill">Web Design</div>
            </div>
            <div class="cell">
              <div class="number">2</div>
              <div class="spaceline"></div>
              <div class="skill">Frontend</div>
            </div>
          </div>
          <div class="row">
            <div class="cell">
            <div class="number">3</div>
            <div class="spaceline"></div>
            <div class="skill">Backend</div>
            </div>
            <div class="cell">
            <div class="number">4</div>
            <div class="spaceline"></div>
            <div class="skill">BDD</div>
            </div>
          </div>
          <div class="row">
            <div class="cell">
            <div class="number">5</div>
            <div class="spaceline"></div>
            <div class="skill">Responsive Design</div>
            </div>
            <div class="cell">
            <div class="number">6</div>
            <div class="spaceline"></div>
            <div class="skill">Web Accessibility</div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
});
