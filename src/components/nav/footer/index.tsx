import { component$, useStyles$, useTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import styles from "./index.scss?inline";
import qwikIcon from "../../../assets/qwik-color.svg";

export default component$(() => {
  useStyles$(styles);

  const loc = useLocation();

  useTask$(async ({ track }) => {
    track(() => loc.isNavigating);
  });

  return (
    <nav class="cpt-footer-nav">
      <div class="info">
        <div class="column">
          <div class="footerText large">Code Portfolio</div>
          <br />
          <div class="footerText big">Pauline, Développeuse Web</div>
        </div>
        <div class="column">
          <Link href="/" class="button-home ">
            Accueil
          </Link>
          <Link href="/about" class="button-home ">
            A propos
          </Link>
          <Link href="/projects" class="button-home ">
            Projets
          </Link>
          <Link href="/adventures" class="button-home ">
            Aventures
          </Link>
          <Link href="/contact" class="button-home ">
            Contact
          </Link>
        </div>
        <div class="column">
          <div class="footerText">© 2024 Pauline Cerello.</div>
          <div class="footerText">Tous droits réservés.</div>
          <div class="footerText col">Site créé avec &nbsp; <a href="https://qwik.dev/" target="_blank">
          Qwik &nbsp;
          
            <img src={qwikIcon} alt="Qwik logo" class="qwikIcon" width={18} height={18} /></a>
          </div>
          <Link href="/legalNotice" class="footerText">
            Mentions légales
          </Link>
          
        </div>
      </div>
      <div class="social">
        <a href="https://github.com/pcerello/" target="_blank" class="socialIcon">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/pauline-cerello-developpeuse-web-full-stack/" target="_blank" class="socialIcon">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://pcerello.github.io/" target="_blank" class="socialIcon">
          <i class="fa-solid fa-globe"></i>
        </a>
      </div>
    </nav>
  );
});
