<template>
  <div class="drawerComponent">
    <div
      class="flex flex-col items-center justify-center bg-black shadow-md rounded-t-none px-8 pt-6 pb-8 mb-4"
    >
      <div
        @click="$emit('hamburgerClicked', 'search')"
        class="cursor-pointer hover:underline mb-4 text-white font-bold"
      >
        Search
      </div>
      <div
        @click="$emit('hamburgerClicked', 'loginForm')"
        class="cursor-pointer hover:underline mb-4 text-white font-bold"
      >
        Log In
      </div>
      <div
        @click="$emit('hamburgerClicked', 'signUpForm')"
        class="cursor-pointer hover:underline text-white font-bold"
      >
        Sign Up
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
