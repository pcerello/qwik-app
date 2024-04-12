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
        <Link class="icon" href="/">
          CodeGirl Portfolio
        </Link>
      </div>

      <div class="right">

        <Link href="/" class="button-home">
          Accueil
        </Link>
        <Link href="/about" class="button-home">
          A propos
        </Link>
        <Link href="/contact" class="button-home">
          Portfolio
        </Link>
        <Link href="/contact" class="button-home purple">
          Contact
        </Link>
        
      </div>
    </nav>
  );
});