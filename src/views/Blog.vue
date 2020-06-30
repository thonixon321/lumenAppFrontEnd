<template>
  <div @click="$emit('clicked')">
    <div
      class="w-full h-56 bg-cover"
      :style="`background-image: url(${blog.blogImage})`"
    ></div>
    <div
      v-if="blog.readonly === false"
      class="editIcon"
    >
      <base-button
        @clicked="$refs.fileBlogInput.click()"
        :icon="true"
        type="editIcon"
      >
      </base-button>
    </div>
    <div
      v-if="blog.readonly"
      class='text-3xl ml-12 mt-2'
    >
      {{ blog.title }}
    </div>
    <div
      v-else
      class="ml-12"
    >
      <label
        class="block text-black text-sm font-bold mt-2"
        for="title"
      >
        Title:
      </label>
      <input
        :class="{ error: msg.title !== null}"
        class="text-3xl mt-2 border rounded p-2 focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        v-model="blog.title"
        @input="msg.title = null"
      />
      <p
        v-if="msg.title"
        class="text-red-500 text-xs italic"
      >
        {{ msg.title }}
      </p>
    </div>
    <div class='flex items-center mx-12 my-4'>
      <img
        v-if="blog.readonly"
        class="w-12 h-12 rounded-full"
        :src="blog.authorImage"
      />
      <div
        v-else
        class="flex flex-col mt-4"
      >
        <img
          class="cursor-pointer w-12 h-12 rounded-full"
          :src="blog.authorImage"
          @click="$refs.fileAuthorInput.click()"
        />
        <button
          class="text-sm"
          @click="$refs.fileAuthorInput.click()"
        >Edit</button>
      </div>
      <h1
        v-if="blog.readonly"
        class="my-4 mx-2 italic"
      >{{ blog.author }}</h1>
      <div
        class="ml-4"
        v-else
      >
        <label
          class="block text-black text-sm font-bold mt-2"
          for="title"
        >
          Author:
        </label>
        <input
          :class="{ error: msg.author !== null}"
          class="mt-2 border rounded p-2 focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          v-model="blog.author"
          @input="msg.author = null"
        />
        <p
          v-if="msg.author"
          class="text-red-500 text-xs italic"
        >
          {{ msg.author }}
        </p>
      </div>
    </div>
    <div class=''>
      <div class="mb-4 mx-12">
        <div v-if="blog.readonly">
          {{ blog.body }}
        </div>
        <div v-else>
          <label
            class="block text-black text-sm font-bold mb-2"
            for="body"
          >
            Body:
          </label>
          <textarea
            :class="{ error: msg.body !== null}"
            class="shadow appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="body"
            type="text"
            v-model="blog.body"
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
      </div>
      <div
        v-if="blog.readonly === false"
        class="mb-4 flex"
      >
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
      </div>
      <button
        v-if="blog.readonly === false"
        @click="submitEdit"
        :class="[errorShake ? 'errorShake' : '']"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-12 mb-4 w-48 h-12"
        type="submit"
      >
        Publish
      </button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton";
export default {
  name: "ReadBlog",

  props: {
    blog: {
      required: true,
      type: Object
    }
  },

  data() {
    return {
      selectedAuthorFile: null,
      selectedBlogFile: null,
      msg: {
        title: null,
        author: null,
        body: null
      },
      errorShake: false
    };
  },

  methods: {
    async submitEdit() {
      let validFields = await this.validateFields();
      // const fd = new FormData();
      // fd.append("image", this.selectedFile, this.selectedFile.name);

      if (validFields) {
        this.$store.dispatch("updateAlert", {
          alert: true,
          alertSuccess: true,
          alertTitle: "Success!",
          alertMessage: "Edited blog successfully"
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

    validateFields() {
      let validFields = true;
      //make sure fields are not empty
      if (this.blog.title === "") {
        this.msg["title"] = "Title required";
        validFields = false;
      }

      if (this.blog.author === "") {
        this.msg["author"] = "Author required";
        validFields = false;
      }

      if (this.blog.body === "") {
        this.msg["body"] = "Body required";
        validFields = false;
      }

      return validFields;
    },

    authorFileSelected(event) {
      console.log(event);

      this.selectedAuthorFile = event.target.files[0];
    },

    blogFileSelected(event) {
      console.log(event);

      this.selectedBlogFile = event.target.files[0];
    }
  },

  components: {
    BaseButton
  }
};
</script>

<style scoped>
.editIcon {
  margin-top: -1em;
  transform: scale(1.5);
  float: right;
  margin-right: 2em;
}
</style>