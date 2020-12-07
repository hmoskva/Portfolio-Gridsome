<template>
  <button class="app-button flex" :class="[outline ? 'outline' : '', btnClass]">
    <component v-if="icon" :is="icon" class="icon"> </component>
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    btnClass: {
      type: String,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.app-button {
  padding: 22px 26px;
  background: #c4c4c4;
  font-family: "Varela", sans-serif;
  outline: none;
}
.app-button.outline {
  background: #fff;
  border: 1px solid #000000;
  font-family: "Merriweather", serif;
  text-transform: uppercase;
  transition: all 0.3s;
}
.app-button.btn-sm {
  padding: 18px 26px;
}
.icon {
  margin-right: 12.5px;
}
.app-button.outline:hover {
  color: #fff;
  background: #c4c4c4;
  border: 1px solid #c4c4c4;
}
</style>
