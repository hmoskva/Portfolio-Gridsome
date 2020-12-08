<template>
  <span class="label" :class="[labelClass]">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    labelClass: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>

<style scoped>
.label {
  padding: 13px 25px;
  text-align: center;
  color: #000;
  background: #c4c4c4;
  text-transform: uppercase;
  display: inline-block;
  font-family: "Varela", sans-serif;
}
</style>
