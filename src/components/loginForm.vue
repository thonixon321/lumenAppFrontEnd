<template>
  <div
    :class="[drawer ? 'drawerComponent' : 'slidingComponent', errorShake ? 'errorShake' : '']"
    class="z-10"
  >
    <form
      @submit.prevent="formSubmitted"
      class="bg-black shadow-md rounded-t-none px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="email">Email</label>
        <input
          :class="{ error: msg.email !== null}"
          class="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="email"
          v-model="email"
          @input="msg.email = null"
        />
        <p v-if="msg.email" class="text-red-500 text-xs italic">{{ msg.email }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2" for="password">Password</label>
        <input
          :class="{ error: msg.password !== null}"
          class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          v-model="password"
          @input="msg.password = null"
        />
        <p v-if="msg.password" class="text-red-500 text-xs italic">{{ msg.password }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >Log In</button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >Forgot Password?</a>
      </div>
    </form>
  </div>
</template>

<script>
import { axiosHandler } from "../mixins/axiosHandler";
export default {
  name: "LoginForm",

  mixins: [axiosHandler],

  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      email: null,
      password: null,
      errorShake: false,
      msg: {
        email: null,
        password: null
      }
    };
  },

  methods: {
    async formSubmitted() {
      let validFields = await this.validateFields();
      let settingsObj, payloadObj;
      if (validFields) {
        settingsObj = {
          url: "http://authors-lumen.test/api/login",
          method: "POST",
          callBack: this.formSubmittedResponse
        };

        payloadObj = {
          email: this.email,
          password: this.password
        };

        this.sendAxios(payloadObj, settingsObj);
      } else {
        this.errorShake = true;

        setTimeout(() => {
          this.errorShake = false;
        }, 1000);
      }
    },

    formSubmittedResponse(res) {
      console.log(res);
      this.$store.dispatch("setToken", `Bearer ${res.data.token}`);
      //also set this token in local storage with timer, when user actually logs out, then clear out token
      this.$emit("close");
      //upon successful axios response
      this.$store.dispatch("updateLoggedInStatus", true);
      this.$store.dispatch("updateAlert", {
        alert: true,
        alertSuccess: true,
        alertTitle: "Success!",
        alertMessage: "You were logged in successfully"
      });

      setTimeout(() => {
        this.$store.dispatch("updateAlert", {
          alert: false,
          alertSuccess: false,
          alertTitle: "",
          alertMessage: ""
        });
      }, 1500);
    },

    validateFields() {
      let validFields = true;
      //make sure fields are not empty
      if (this.password === null) {
        this.msg["password"] = "Password required";
        validFields = false;
      }

      if (this.email === null) {
        this.msg["email"] = "Email required";
        validFields = false;
      }

      if (this.email) {
        //make sure valid email
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
          this.msg["email"] = null;
        } else {
          this.msg["email"] = "Invalid email";
          validFields = false;
        }
      }
      //check password length
      if (this.password && this.password.length < 8) {
        this.msg["password"] = "Password must be at least 8 characters";
        validFields = false;
      }

      return validFields;
    }
  }
};
</script>
