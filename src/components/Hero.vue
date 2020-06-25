<template functional>
  <div class="hero">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 500px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  vertical-align: middle;
  background-image: url(https://www.myfirstccu.org/images/hero/large.jpg);
  background-repeat: no-repeat;
}
</style>