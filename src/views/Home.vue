<template>
  <div @click="$emit('clicked')" class="container">
    <base-card
      v-for="(card, index) in blogs"
      :key="index"
      :author="card.user.name"
      :title="card.blog_title"
      :body="card.blog_body"
      :published="card.created_at"
      :blogImage="null"
      :authorImage="null"
      :showEdit="loggedIn"
      :showDelete="loggedIn"
    ></base-card>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard";
import { mapState } from "vuex";
import { axiosHandler } from "../mixins/axiosHandler";

export default {
  name: "LoginPage",

  mixins: [axiosHandler],

  data() {
    return {
      feedback: null,
      blogs: []
    };
  },

  computed: {
    ...mapState({
      loggedIn: state => state.loggedIn
    })
  },

  methods: {
    authorsResponse(res) {
      this.blogs = res.data;
    }
  },

  components: {
    BaseCard
  },

  mounted() {
    var settingsObj, payloadObj;

    settingsObj = {
      url: "http://authors-lumen.test/api/authors",
      method: "GET",
      callBack: this.authorsResponse
    };

    payloadObj = {};

    this.sendAxios(payloadObj, settingsObj);
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */

/* .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */

.container {
  display: flex;
  flex-wrap: wrap;
}

.error {
  border: 1px solid rgb(240, 59, 95);
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
