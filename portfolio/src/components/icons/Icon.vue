<template>
  <div class="icon">
    <component :is="icon"> </component>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.icon {
  width: 55px;
  height: 55px;
  background: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
