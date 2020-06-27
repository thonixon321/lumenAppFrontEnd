<template>
  <button
    @click.stop="$emit('clicked', type)"
    :class="type + 'Button'"
  >
    <slot name="left-text" />
    <component
      v-if="icon"
      :is="svg"
    />
    <slot name="right-text" />
  </button>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    type: {
      type: String,
      default: "regular"
    },

    icon: {
      type: Boolean,
      default: false
    },

    text: {}
  },

  computed: {
    svg() {
      return () => import(`../assets/${this.type}.vue`);
    }
  }
};
</script>

<style scoped>
.menuHamburgerButton {
  display: none;
}

.viewIconButton {
  border-radius: 50%;
  color: rgb(48, 28, 97);
  background: rgb(235, 235, 238);
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.51em;
}

.trashIconButton {
  border-radius: 50%;
  color: crimson;
  background: rgb(235, 235, 238);
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.51em;
}

.editIconButton {
  border-radius: 50%;
  color: blue;
  background: rgb(235, 235, 238);
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.viewIconButton:hover,
.trashIconButton:hover,
.editIconButton:hover {
  transform: scale(1.05);
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
