<template>
  <div class="w-full relative">
    <input
      class="
        border border-indigo-300
        px-3
        py-2
        text-sm
        focus:outline-none
        w-full
        rounded-md
      "
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search"
    />
    <ul
      class="
        absolute
        z-10
        bg-white
        shadow-lg
        border
        rounded-lg
        divide-y divide-indigo-50
        w-full
        max-h-72
        overflow-y-auto
        mt-1
      "
      v-if="ui_list.length"
    >
      <li class="" v-for="ui of ui_list" :key="ui.slug">
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      ui_list: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.ui_list = [];
        return;
      }
    },
  },
  methods: {
    viewPage() {
      this.ui_list = [];
    },
  },
};
</script>