import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./index.scss?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <div id="page-content">
      <h1>Mentions Légales</h1>

      <p>Ce site est la propriété de Pauline Cerello.</p>

      <h2>Propriété intellectuelle</h2>

      <p>
        Tous les contenus présents sur ce site, y compris mais sans s'y limiter, les textes, images, graphiques, maquettes et codes source, sont protégés par
        des droits d'auteur et autres droits de propriété intellectuelle détenus par Pauline Cerello sauf indication contraire.
      </p>

      <h2>Images générées par intelligence artificielle</h2>
      <p>
        Certaines images présentes sur ce site sont générées par une intelligence artificielle (IA). Ces images sont utilisées à des fins esthétiques et
        créatives, et ne représentent pas nécessairement des éléments réels. Toutes les images générées par IA sont la propriété de Pauline Cerello.
      </p>
      <h2>Maquettes</h2>

      <p>
        Les maquettes utilisées comme base pour la conception de ce site sont des représentations visuelles de projets et de concepts créés par Pauline Cerello.
        Tous les droits de propriété intellectuelle sur les maquettes sont détenus par Pauline Cerello.
      </p>
      <h2>Qwik.js</h2>
      <p>
        Ce site a été codé en utilisant Qwik.js, un framework JavaScript moderne et léger pour le développement web. Qwik.js est distribué sous la licence MIT.
      </p>
      <h2>Utilisation des contenus</h2>
      <p>
        Toute reproduction, distribution ou utilisation des contenus de ce site sans autorisation préalable écrite de Pauline Cerello est strictement interdite.
      </p>
      <h2>Contact</h2>
      <p>
        Pour toute question concernant ce site ou pour obtenir une autorisation d'utilisation de ses contenus, veuillez nous contacter à l'adresse suivante :
        pauline.cerello@gmail.com.
      </p>
    </div>
  );
});
