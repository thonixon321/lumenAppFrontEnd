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
        <label class="block text-white text-sm font-bold mb-2" for="name">Name</label>
        <input
          v-model="name"
          :class="{ error: msg.name !== null}"
          class="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          @input="msg.name = null"
        />
        <p v-if="msg.name" class="text-red-500 text-xs italic">{{ msg.name }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="email">Email</label>
        <input
          v-model="email"
          :class="{ error: msg.email !== null}"
          class="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="email"
          @input="msg.email = null"
        />
        <p v-if="msg.email" class="text-red-500 text-xs italic">{{ msg.email }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="password">Password</label>
        <input
          v-model="password"
          :class="{ error: msg.password !== null}"
          class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          @input="msg.password = null, msg.passwordConfirmed = null, passwordConfirmed = null"
        />
        <p v-if="msg.password" class="text-red-500 text-xs italic">{{ msg.password }}</p>
      </div>
      <div class="mb-6">
        <label
          class="block text-white text-sm font-bold mb-2"
          for="confirm_password"
        >Confirm Password</label>
        <input
          v-model="passwordConfirmed"
          :class="{ error: msg.passwordConfirmed !== null}"
          class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          id="confirm_password"
          type="password"
          placeholder="******************"
          @input="msg.passwordConfirmed = null"
        />
        <p
          v-if="msg.passwordConfirmed"
          class="text-red-500 text-xs italic"
        >{{ msg.passwordConfirmed }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { axiosHandler } from "../mixins/axiosHandler";
export default {
  name: "SignUpForm",

  mixins: [axiosHandler],

  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      name: null,
      email: null,
      password: null,
      passwordConfirmed: null,
      errorShake: false,
      msg: {
        name: null,
        email: null,
        password: null,
        passwordConfirmed: null
      }
    };
  },

  methods: {
    async formSubmitted() {
      let validFields = await this.validateFields();
      let settingsObj, payloadObj;
      if (validFields) {
        settingsObj = {
          url: "http://authors-lumen.test/api/register",
          method: "POST",
          callBack: this.formSubmittedResponse
        };

        payloadObj = {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmed
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
      //upon successful axios response
      if (res.status === 201) {
        this.$emit("close");

        this.$store.dispatch("setUserId", res.data.user.id);

        this.$store.dispatch("updateAlert", {
          alert: true,
          alertSuccess: true,
          alertTitle: "Success!",
          alertMessage: "You were signed up successfully! You can now login!"
        });

        setTimeout(() => {
          this.$store.dispatch("updateAlert", {
            alert: false,
            alertSuccess: false,
            alertTitle: "",
            alertMessage: ""
          });
        }, 1500);
      } else {
        this.$store.dispatch("updateAlert", {
          alert: true,
          alertSuccess: false,
          alertTitle: "Failed",
          alertMessage: "Something went wrong with this request"
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
    },

    validateFields() {
      let validFields = true;
      //make sure fields are not empty
      if (this.name === null) {
        this.msg["name"] = "Name required";
        validFields = false;
      }
      if (this.email === null) {
        this.msg["email"] = "Email required";
        validFields = false;
      }
      if (this.password === null) {
        this.msg["password"] = "Password required";
        validFields = false;
      }
      if (this.passwordConfirmed === null) {
        this.msg["passwordConfirmed"] = "Password confirmation required";
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

      //passwords need to match
      if (this.password !== this.passwordConfirmed) {
        this.msg["passwordConfirmed"] = "Passwords do not match";
        validFields = false;
      }

      return validFields;
    }
  }
};
</script>
