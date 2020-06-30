<template>
  <div @click="$emit('clicked')">
    <h1 class="text-3xl my-4 mx-12">Add a new blog</h1>
    <form
      @submit.prevent="formSubmitted"
      :class="[errorShake ? 'errorShake' : '']"
      class="bg-blue-200 shadow-md rounded-t-none mx-12 px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block text-black text-sm font-bold mb-2"
          for="title"
        >
          Title:
        </label>
        <input
          v-model="title"
          :class="{ error: msg.title !== null}"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Title"
          @input="msg.title = null"
        />
        <p
          v-if="msg.title"
          class="text-red-500 text-xs italic"
        >
          {{ msg.title }}
        </p>
      </div>
      <div class="mb-4">
        <label
          class="block text-black text-sm font-bold mb-2"
          for="body"
        >
          Body:
        </label>
        <textarea
          v-model="body"
          :class="{ error: msg.body !== null}"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="body"
          type="text"
          placeholder="Body"
          @input="msg.body = null"
        >
        </textarea>
        <p
          v-if="msg.body"
          class="text-red-500 text-xs italic"
        >
          {{ msg.body }}
        </p>
      </div>
      <div class="mb-4 flex">
        <input
          @change="authorFileSelected"
          class="hidden"
          id="authorImage"
          type="file"
          placeholder="Author Image"
          ref="fileAuthorInput"
        />
        <input
          @change="blogFileSelected"
          class="hidden"
          id="authorImage"
          type="file"
          placeholder="Author Image"
          ref="fileBlogInput"
        />
        <button
          type="button"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          @click="$refs.fileAuthorInput.click()"
        >
          Upload Author Image
        </button>
        <button
          type="button"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-2"
          @click="$refs.fileBlogInput.click()"
        >
          Upload Blog Image
        </button>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Publish
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddBlog",

  data() {
    return {
      selectedAuthorFile: null,
      selectedBlogFile: null,
      title: null,
      body: null,
      msg: {
        title: null,
        body: null
      },
      errorShake: false
    };
  },

  methods: {
    async formSubmitted() {
      let validFields = await this.validateFields();
      // const fd = new FormData();
      // fd.append("image", this.selectedFile, this.selectedFile.name);

      if (validFields) {
        this.$store.dispatch("updateAlert", {
          alert: true,
          alertSuccess: true,
          alertTitle: "Success!",
          alertMessage: "Added blog successfully"
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
        this.errorShake = true;

        setTimeout(() => {
          this.errorShake = false;
        }, 1000);
      }
    },

    authorFileSelected(event) {
      console.log(event);

      this.selectedAuthorFile = event.target.files[0];
    },

    blogFileSelected(event) {
      console.log(event);

      this.selectedBlogFile = event.target.files[0];
    },

    validateFields() {
      let validFields = true;
      //make sure fields are not empty
      if (this.title === null) {
        this.msg["title"] = "Title required";
        validFields = false;
      }

      if (this.body === null) {
        this.msg["body"] = "Body required";
        validFields = false;
      }

      return validFields;
    }
  }
};
</script>

<style scoped>
</style>
