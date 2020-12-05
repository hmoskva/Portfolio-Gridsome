<template>
  <header class="container mx-auto flex flex-row-reverse pt-6">
    <AppButton class="z-10" text="Reach Out" btnClass="btn-sm" />
  </header>
</template>

<script>
import AppButton from "./AppButton";
export default {
  components: {
    AppButton,
  },
};
</script>

<style scoped>
@media (max-width: 480px) {
  header {
    padding-left: 100px;
    padding-right: 100px;
  }
}
</style>
