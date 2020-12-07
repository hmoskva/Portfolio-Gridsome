<template>
  <div class="section" :class="[wrapperClass]">
    <h3 class="mb-2">{{ title }}</h3>

    <h1>{{ mainTitle }}</h1>
    <slot name="socials" />
    <h3 class="mt-5">
      {{ info }}
    </h3>
    <AppButton
      :text="btnProps.text"
      :outline="btnProps.outline"
      :icon="btnProps.icon"
      class="mt-8"
    />
  </div>
</template>

<script>
import AppButton from "~/components/AppButton";

export default {
  props: {
    wrapperClass: String,
    title: String,
    mainTitle: String,
    info: String,
    btnProps: Object,
  },
  components: {
    AppButton,
  },
};
</script>

<style scoped>
.section {
}
.section h3 {
  font-size: 16px;
  line-height: 26px;
  font-family: "Merriweather", serif;
}
.section h1 {
  font-size: 144px;
  font-family: "Anton", sans-serif;
  line-height: 1;
}
@media (max-width: 480px) {
  .section h1 {
    font-size: 75px;
  }
}
</style>
