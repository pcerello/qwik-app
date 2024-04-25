import { component$, useStyles$ } from "@builder.io/qwik";
import Moi from "../../assets/moi.jpg?jsx"

import styles from "./index.scss?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <div id="about">
      <div class="description">
      <h1>Salut, je suis Pauline </h1>
      &nbsp;
      <p>
        Je suis <span class="purple">développeuse web full stack</span>, avec une passion particulière pour le développement front-end où j'utilise le framework Qwik pour créer des
        expériences web innovantes et intuitives. La création de ce site est le fruit de mon amour pour mon métier, mettant en œuvre les compétences acquises
        lors de mes stages et projets.
      </p>
      &nbsp;
      <p>
        Au-delà de ma carrière professionnelle, ma vie est imprégnée d'une <span class="purple">passion pour l'aventure et la résilience</span>. Face aux défis rencontrés, j'ai toujours su
        rebondir et saisir chaque opportunité avec détermination. Chaque jour, je démontre que rien n'est impossible lorsque l'on y met du cœur et de la
        persévérance.
      </p>
      &nbsp;
      <p>
        Les <span class="purple">voyages</span> occupent une place privilégiée dans ma vie, que ce soit en compagnie de ma famille ou de mes amis. J'ai eu la chance d'explorer de nombreux
        endroits, tant en France qu'à l'étranger, créant ainsi des souvenirs inoubliables et nourrissant ma soif d'aventure. Les escapades dans des parcs
        d'attractions, notamment <span class="purple">Disneyland Paris</span>, sont des moments privilégiés que je chéris particulièrement, partageant cette passion avec mes proches.
      </p>
      &nbsp;
      <p>
        En dehors de mes passions professionnelles et de mes aventures, j'apprécie les petits plaisirs de la vie. Les <span class="purple">chats</span> occupent une place spéciale dans mon
        cœur, la musique est une source constante d'inspiration, les films et séries sont des échappatoires bienvenues, et la gastronomie est une invitation au
        voyage des sens. Mais par-dessus tout, rien ne vaut une <span class="purple">bonne nuit de sommeil</span> pour recharger les batteries.
      </p>
    </div>
    <div class="image">
      <Moi style={{ width: "100%", height: "auto" }} alt="Pauline, développeuse web" aria-label="Pauline, développeuse web" />
      </div>
  </div>
  );
});
