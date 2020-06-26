<template functional>
  <div class="card sm:w-full lg:w-1/2">
    <div
      class="inner-content w-full lg:max-w-full lg:flex hover:shadow-xl transition duration-500 ease-in-out"
    >
      <div
        class="object-cover h-64 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        :style="`background-image: url(${props.blogImage})`"
      ></div>
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg
              class="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
              />
            </svg>
            Members only
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">
            {{ props.title }}
          </div>
          <p class="text-gray-700 text-base">
            {{ props.snippet }}
          </p>
        </div>
        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            :src="props.authorImage"
            alt="Avatar of Jonathan Reinink"
          />
          <div class="text-sm">
            <p class="text-gray-900 leading-none">{{ props.author }}</p>
            <p class="text-gray-600">{{ props.published }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",

  props: {
    author: {
      type: String,
      default: "Tommy Nixon",
    },

    title: {
      type: String,
      default: "How to Code",
    },

    snippet: {
      type: String,
      default:
        "You get your computer, and make sure there is a keyboard. Making sure the computer is charged or connected to a power outlet, turn your computer on. Put your hands on the keyboard, and then....",
    },

    published: {
      type: String,
      default: "May 7",
    },

    blogImage: {
      type: String,
      default: "http://localhost:8080/rest_movieApp/api/image/codeTom.jpg",
    },

    authorImage: {
      type: String,
      default: "http://localhost:8080/rest_movieApp/api/image/me.png",
    },
  },
};
</script>

<style scoped>
.card {
  padding: 2em;
}

.inner-content:hover {
  transform: scale(1.05);
}
</style>
