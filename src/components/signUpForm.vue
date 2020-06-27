<template>
  <div
    :class="[drawer ? 'drawerComponent' : 'slidingComponent', 'component']"
    class="z-10"
  >
    <form
      @submit.prevent="formSubmitted"
      class="bg-black shadow-md rounded-t-none px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block text-white text-sm font-bold mb-2"
          for="name"
        >
          Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-white text-sm font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="email"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-white text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          :class="{ error: feedback }"
          class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p
          v-if="feedback"
          class="text-red-500 text-xs italic"
        >
          Please choose a password.
        </p>
      </div>
      <div class="mb-6">
        <label
          class="block text-white text-sm font-bold mb-2"
          for="confirm_password"
        >
          Confirm Password
        </label>
        <input
          :class="{ error: feedback }"
          class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="confirm_password"
          type="password"
          placeholder="******************"
        />
        <p
          v-if="feedback"
          class="text-red-500 text-xs italic"
        >
          Please choose a password.
        </p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",

  props: {
    drawer: {
      type: Boolean,
      default: false
    },

    feedback: {
      type: String
    }
  },

  methods: {
    formSubmitted() {
      this.$emit("close");
      //upon successful axios response
      this.$store.dispatch("updateLoggedInStatus", true);
      this.$store.dispatch("updateAlert", {
        alert: true,
        alertSuccess: true,
        alertTitle: "Success!",
        alertMessage: "You were signed up successfully"
      });

      setTimeout(() => {
        this.$store.dispatch("updateAlert", {
          alert: false,
          alertSuccess: false,
          alertTitle: "",
          alertMessage: ""
        });
      }, 1500);
    }
  }
};
</script>
