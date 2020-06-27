<template>
  <div @click="$emit('clicked')">
    <h1 class="text-3xl my-4 mx-12">Add a new blog</h1>
    <form
      @submit.prevent="formSubmitted"
      class="bg-blue-200 shadow-md rounded-t-none mx-12 px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block text-black text-sm font-bold mb-2"
          for="title"
        >
          Title
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Title"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-black text-sm font-bold mb-2"
          for="body"
        >
          Body
        </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="body"
          type="text"
          placeholder="Body"
        >
        </textarea>
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

  methods: {
    formSubmitted() {}
  }
};
</script>

<style scoped>
</style>
