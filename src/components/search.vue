<template>
  <div
    :class="[drawer ? 'drawerComponent' : 'slidingComponent', 'component']"
    class="z-10"
  >
    <form
      @submit.prevent="$emit('formSubmitted')"
      class="bg-black shadow-md rounded-t-none px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-6">
        <label
          class="block text-white text-sm font-bold mb-2"
          for="search"
        >
          Search
        </label>
        <input
          class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          placeholder="search"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
