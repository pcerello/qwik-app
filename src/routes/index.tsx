import { component$, useStyles$ } from "@builder.io/qwik";

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
        <img src="/girl.png" width="340" height={340} alt="trailer" />
        <div class="trailer-text">Projets</div>
        <div class="trailer-text">Skills</div>
        <div class="trailer-text">Expériences</div>
      </div>
    </div>
  );
});
