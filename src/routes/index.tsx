import { component$, useStyles$ } from "@builder.io/qwik";
import Image from "../../public/girl.png?jsx";
import styles from "./index.scss?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <div id="page-content">
      <div class="description">
        <h1>Je suis Pauline, développeuse web, passionnée par la vie !</h1>
        <p>
          Bienvenue sur mon portfolio ! Explorez mon parcours dans le développement web et découvrez ma passion pour la vie à travers mes aventures. Malgré les
          obstacles rencontrés, je me bats pour vivre ma passion.
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
  );
});
