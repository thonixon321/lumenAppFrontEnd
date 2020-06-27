<template functional>
  <div
    role="alert"
    class="alertContainer"
  >
    <div
      :class="[props.success ? 'success' : 'fail', 'alert']"
      class="text-white font-bold rounded-t px-4 py-2"
    >
      <slot name="title" />
    </div>
    <div
      :class="[props.success ? 'successInner' : 'failInner', 'alert']"
      class="border border-t-0 rounded-b px-4 py-3"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseAlert",

  props: {
    success: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.alertContainer {
  position: absolute;
  top: 6.25em;
  min-width: 15em;
  z-index: 20;
}

.success {
  background: rgb(104, 218, 52);
}

.fail {
  background: rgb(241, 67, 67);
}

.successInner {
  background: rgb(236, 255, 228);
  color: rgb(65, 165, 18);
  border: 1px solid rgb(104, 218, 52);
}

.failInner {
  background: rgb(255, 239, 242);
  color: rgb(241, 67, 67);
  border: 1px solid rgb(241, 67, 67);
}
</style>
