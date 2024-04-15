import { component$, useStore, useStyles$, useTask$, useVisibleTask$ , $} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import styles from "./index.scss?inline";
import Image from "../../../../public/logo.png?jsx";

export default component$(() => {
  useStyles$(styles);

  const loc = useLocation();
  const currentPath = loc.url.pathname.split("/")[1];

  useTask$(async ({ track }) => {
    track(() => loc.isNavigating);
  });

  
  const dropdownOpen = useStore({ value: false });

  const setDropdownOpen = $(() => {
    if (dropdownOpen.value === false) {
      dropdownOpen.value = true;
    } else {
      dropdownOpen.value = false;
    }
  });

  const store = useStore({ someKey:  1500});
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    store.someKey = window.innerWidth;
    // check window resize
    window.addEventListener("resize", () => {
      store.someKey = window.innerWidth;
      console.log("store.someKey", store.someKey);
      dropdownOpen.value = false;
    });

    
  } );


  return (
    <nav class="cpt-primary-nav">
      <div class="left">
        <Link class="name" href="/">
          Code Portfolio
        </Link>
        <p class="name">Cerello Pauline</p>
        <Image style={{ width: "70px", height: "70px" }} />
      </div>

{
  // burger menu si la largeur de l'écran est inférieure à 768px
  store.someKey < 768 ? (
    <div class="right">
    <i class="fa-solid fa-bars" onClick$={()=> setDropdownOpen()}></i>
    <div class={"dropdown " + (dropdownOpen.value === true ? "open" : "")}>
      <Link href="/" class={"button-home " + (currentPath === "" ? "active" : "")}>
        Accueil
      </Link>
      <Link href="/about" class={"button-home " + (currentPath === "about" ? "active" : "")}>
        A propos
      </Link>
      <Link href="/projects" class={"button-home " + (currentPath === "projects" ? "active" : "")}>
        Projets
      </Link>
      <Link href="/adventures" class={"button-home " + (currentPath === "adventures" ? "active" : "")}>
        Aventures
      </Link>
      <Link href="/contact" class={"button-home purple " + (currentPath === "contact" ? "active" : "")}>
        Contact
      </Link>
      </div>
    </div>
  ) : (
    <div class="right">
            <Link href="/" class={"button-home " + (currentPath === "" ? "active" : "")}>
              Accueil
            </Link>
            <Link href="/about" class={"button-home " + (currentPath === "about" ? "active" : "")}>
              A propos
            </Link>
            <Link href="/projects" class={"button-home " + (currentPath === "projects" ? "active" : "")}>
              Projets
            </Link>
            <Link href="/adventures" class={"button-home " + (currentPath === "adventures" ? "active" : "")}>
              Aventures
            </Link>
            <Link href="/contact" class={"button-home purple " + (currentPath === "contact" ? "active" : "")}>
              Contact
            </Link>
          </div>)
}
          
        
    </nav>
  );
});
