<template>
  <header class="border-b shadow-sm">
    <div class="bg-indigo-50 bg-opacity-50 border-b border-indigo-50 px-2 py-2 text-center">
      <a class="text-sm text-indigo-500 font-medium hover:underline" href="https://focc.cc"
        >🐈🐈🐈</a
      >
    </div>
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
      <!-- <img
          src="../../static/logo.png"
          class="h-[40px]"
          alt="Logo"
        /> -->

      <div class="w-full mx-4 sm:mx-8">
        <AppSearchInput />
      </div>

      <button
        class="inline-flex items-center sm:hidden"
        type="button"
        @click="toggleDrawer()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div class="hidden sm:block min-w-[82px]">
        <ul class="flex space-x-6">
          <li>
            <router-link to="/">
              <img
                src="../../static/logo.png"
                class="w-[29px] opacity-60 hover:opacity-80"
                alt="Home"
              />
            </router-link>
          </li>
          <li>
            <a
              href="https://github.com/FangPengbo/kitty"
              target="_blank"
            >
              <img
                src="../../static/github-logo.png"
                class="w-[29px] opacity-60 hover:opacity-80"
                alt="GitHub Logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import AppSearchInput from './AppSearchInput.vue'

export default {
    components:{
      AppSearchInput
    }
}
</script>