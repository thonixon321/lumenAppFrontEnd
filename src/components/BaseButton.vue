<template>
  <button @click="$emit('clicked', type)" :class="type + 'Button'">
    <slot name="left-text" />
    <component v-if="icon" :is="svg" />
    <slot name="right-text" />
  </button>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    type: {
      type: String,
      default: "regular",
    },

    icon: {
      type: Boolean,
      default: false,
    },

    text: {},
  },

  computed: {
    svg() {
      return () => import(`../assets/${this.type}.vue`);
    },
  },
};
</script>

<style scoped>
.menuHamburgerButton {
  display: none;
}

@media all and (max-width: 700px) {
  .header-actions button {
    display: none;
  }
  .header-actions button.menuHamburgerButton {
    display: block;
    width: 1em;
  }
}
</style>
