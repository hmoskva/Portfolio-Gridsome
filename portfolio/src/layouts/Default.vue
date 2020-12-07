<template>
  <div class="layout">
    <AppHeader />
    <slot />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  // metaInfo: {
  //   meta: [
  //     {
  //       key: "viewport",
  //       name: "viewport",
  //       content: "initial-scale=1.0, maximum-scale=1.0, width=device-width",
  //     },
  //   ],
  // },
  components: {
    AppHeader,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
* {
  padding: 0;
  margin: 0;
  outline: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  overflow-x: hidden;
}
body {
  margin: 0 auto;
  padding: 0;
  position: absolute;
  overflow-x: hidden;
  width: 100%;
}

.layout {
  margin: 0 auto;
  font-family: "Varela", sans-serif;
}
</style>
