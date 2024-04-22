//@ts-ignore
import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";

import Primary from "~/components/nav/primary";

import styles from "./layout.scss?inline";
import Footer from "~/components/nav/footer";

export const onRequest: RequestHandler = ({ locale }) => {
  locale("fr_FR");
};

export default component$(() => {
  useStyles$(styles);

  return (
    <div id="app">
      <div id="pages">
        <Primary />
        <Slot />
        <Footer />
      </div>
    </div>
  );
});
