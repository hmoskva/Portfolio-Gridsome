// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component

  head.meta.push({
    key: "viewport",
    name: "viewport",
    content: "initial-scale=1.0, maximum-scale=1.0, width=device-width",
  });
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Anton&family=Varela&family=Merriweather&&display=swap",
  });
  Vue.component("Layout", DefaultLayout);
}
