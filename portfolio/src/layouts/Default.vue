<template>
  <div class="layout">
    <AppHeader />
    <slot />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
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
body {
  margin: 0;
  padding: 0;
  position: absolute;
}

.layout {
  margin: 0 auto;
  font-family: "Varela", sans-serif;
}
</style>
