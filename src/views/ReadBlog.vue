<template>
  <div @click="$emit('clicked')">
    <div class='flex items-center mx-12 my-4'>
      <img
        class="w-32 h-32 rounded-full"
        :src="blog.authorImage"
        alt="Avatar of Jonathan Reinink"
      />
      <h1 class="text-3xl my-4 mx-2">{{ blog.author }}</h1>
    </div>
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
          readonly
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          :value="blog.title"
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
          readonly
          class="shadow appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="body"
          type="text"
          :value="blog.snippet"
        >
        </textarea>
      </div>
      <div class="flex items-center justify-between">

      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ReadBlog",

  props: {
    blog: {
      required: true,
      type: Object
    }
  }
};
</script>

<style>
</style>