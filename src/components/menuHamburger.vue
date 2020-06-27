<template>
  <div class="drawerComponent z-10">
    <div class="flex flex-col items-center justify-center bg-black shadow-md rounded-t-none px-8 pt-6 pb-8 mb-4">
      <div
        @click="$emit('hamburgerClicked', 'search')"
        class="cursor-pointer hover:underline mb-4 text-white font-bold"
      >
        Search
      </div>
      <div
        v-if="loggedIn"
        @click="$store.dispatch('updateLoggedInStatus', false)"
        class="cursor-pointer hover:underline mb-4 text-white font-bold"
      >
        Log Out
      </div>
      <div
        v-else
        @click="$emit('hamburgerClicked', 'loginForm')"
        class="cursor-pointer hover:underline mb-4 text-white font-bold"
      >
        Log In
      </div>
      <div
        v-if="loggedIn"
        @click="routeAndClose"
        class="cursor-pointer hover:underline text-white font-bold"
      >
        Add Blog
      </div>
      <div
        v-else
        @click="$emit('hamburgerClicked', 'signUpForm')"
        class="cursor-pointer hover:underline text-white font-bold"
      >
        Sign Up
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HamburgerMenu",

  computed: {
    ...mapState({
      loggedIn: state => state.loggedIn
    })
  },

  methods: {
    routeAndClose() {
      this.$router.push({ name: "AddBlog" });
      this.$emit("close");
    }
  }
};
</script>

<style></style>
