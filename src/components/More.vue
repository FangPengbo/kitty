<template>
  <div
    id="bg"
    class="fixed top-0 left-0"
    v-show="params.isShow"
    :key="Math.round()"
    style="width: 100%; height: 100%"
    @click="close()"
  >
    <div
      id="main"
      class="flex flex-row flex-wrap fixed z-10 right-1/4 top-1/4 rounded-lg overflow-auto border-solid border-1 bg-opacity-95 border-indigo-500 shadow-xl"
      style="background-color: #ebf0ff; width: 50%; height: 50%"
    >
      <div
        class="w-auto h-10 bg-sky-600 text-white font-bold rounded-full py-3 px-6 leading-5 mt-1 ml-1 cursor-pointer"
        v-for="el in elements"
        :key="el"
        @click="list()"
      >
        {{ el }}
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import router from "@/router";
export default {
  setup() {
    const params = reactive({
      isShow: false,
    });
    const elements = ["热血", "奇幻", "异世界"];
    const list = () => {
      params.isShow = false;
      router.push({ path: "/list" });
    };
    const open = () => {
      params.isShow = true;
    };
    const close = () => {
      var evt = window.event;
      var obj = evt.target || evt.srcElement;
      if (obj.id === "bg") {
        params.isShow = false;
      }
    };
    return {
      elements,
      params,
      list,
      open,
      close,
    };
  },
};
</script>