<template>
  <div id="nav">
    <slot name="logo">The Authors</slot>
    <slot name="header-actions"></slot>
  </div>
</template>

<script>
export default {
  name: "BaseNavBar",
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
}
</style>
