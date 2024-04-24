import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./index.scss?inline";

export default component$(() => {
  useStyles$(styles);
  return <div id="page-content">a propos</div>;
});
