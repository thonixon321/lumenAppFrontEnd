<template>
  <component :is="svg" />
</template>

<script>
export default {
  name: 'BaseLogo',

  props: {
    path: {
      type: String,
      default: 'fccu-logo'
    }
  },


  computed: {
    svg () {
      return () => import(`@/assets/${this.path}.vue`)
    }
  }
}
</script>