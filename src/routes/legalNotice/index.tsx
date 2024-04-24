import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./index.scss?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <div id="legaleNotice">
      <h1>Mentions Légales</h1>
      <br />

      <p>Ce site est la propriété de Pauline Cerello.</p>
      <br />

      <h2>Propriété intellectuelle</h2>
      <br />
      <p>
        Tous les contenus présents sur ce site, y compris mais sans s'y limiter,
        les textes, images, graphiques, maquettes et codes source, sont protégés
        par des droits d'auteur et autres droits de propriété intellectuelle
        détenus par Pauline Cerello sauf indication contraire.
      </p>
      <br />
      <h2>Images générées par intelligence artificielle</h2>
      <br />
      <p>
        Certaines images présentes sur ce site sont générées par une
        intelligence artificielle (IA). Ces images sont utilisées à des fins
        esthétiques et créatives, et ne représentent pas nécessairement des
        éléments réels. Toutes les images générées par IA sont la propriété de
        Pauline Cerello.
      </p>
      <br />
      <h2>Maquettes</h2>
      <br />
      <p>
        Les maquettes utilisées comme base pour la conception de ce site sont
        des représentations visuelles de projets et de concepts créés par
        Pauline Cerello. Tous les droits de propriété intellectuelle sur les
        maquettes sont détenus par Pauline Cerello.
      </p>
      <br />
      <h2>Qwik.js</h2>
      <br />
      <p>
        Ce site a été codé en utilisant Qwik.js, un framework JavaScript moderne
        et léger pour le développement web. Qwik.js est distribué sous la
        licence MIT.
      </p>
      <br />
      <h2>Utilisation des contenus</h2>
      <br />
      <p>
        Toute reproduction, distribution ou utilisation des contenus de ce site
        sans autorisation préalable écrite de Pauline Cerello est strictement
        interdite.
      </p>
      <br />
      <h2>Contact</h2>
      <br />
      <p>
        Pour toute question concernant ce site ou pour obtenir une autorisation
        d'utilisation de ses contenus, veuillez nous contacter à l'adresse
        suivante : &nbsp;
        <a href="mailto:pauline.cerello@gmail.com">pauline.cerello@gmail.com</a>
        .
      </p>
    </div>
  );
});
