import { component$, useStyles$, useTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import styles from "./index.scss?inline";

export default component$(() => {
  useStyles$(styles);

  const loc = useLocation();

  
  useTask$(async ({ track }) => {
    track(() => loc.isNavigating);

  });


  return (
    <nav class="cpt-primary-nav">
      <div class="left">
        <Link class="icon name" href="/">
          Code Portfolio
        </Link>
        <p class="name">Cerello Pauline</p>
        <img class="icon" src="/logo.png" width="70" alt="logo" />
      </div>

      <div class="right">

        <Link href="/" class="button-home">
          Accueil
        </Link>
        <Link href="/about" class="button-home">
          A propos
        </Link>
        <Link href="/projects" class="button-home">
          Projets
        </Link>
        <Link href="/adventures" class="button-home">
          Aventures
        </Link>
        <Link href="/contact" class="button-home purple">
          Contact
        </Link>
        
      </div>
    </nav>
  );
});