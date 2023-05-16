<template>
  <div class="flex flex-col w-2/12">
    <div class="flex flex-col h-1/2">
      <div class="flex flex-row">
        <div class="flex-none">🎨</div>
        <div class="flex-grow"></div>
        <div class="flex-none cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover: duration-150" @click="more">Ⓜ</div>
      </div>
      <hr />
      <div
        class="h-1/4 mt-4 rounded-lg font-mono text-4xl text-white shadow-xl text-center cursor-pointer t-select-none transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 hover: duration-150"
        style="line-height: 6rem"
        :style="{ background: category.color }"
        v-for="category in categorys"
        :key="category"
        @click="list"
      >
        {{ category.name }}
      </div>
    </div>

    <div class="flex flex-col h-1/2">
      <div class="flex flex-row">
        <div class="flex-none">🗓︎</div>
        <div class="flex-grow"></div>
        <div class="flex-none cursor-pointer  transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover: duration-150" @click="more">Ⓜ</div>
      </div>
      <hr />
    <div
        class="h-1/4 mt-4 rounded-lg font-mono text-4xl text-white shadow-xl text-center border-0 cursor-pointer t-select-none  transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover: duration-150"
        style="line-height: 6rem;"
        :style="{ background: journal.color }"
        v-for="journal in journals"
        :key="journal"
        @click="list"
      >
        {{ journal.name }}
      </div>
    </div>
  </div>
  <More ref="moreComp"></More>
</template>
<script>
import { reactive, ref } from "vue";
import router from "@/router";
import More from "../components/More.vue";
export default {
  components: {
    //引入子组件
    More,
  },
  setup() {
    //关联子组件
    const moreComp = ref();
    //定义方法
    const more = () => {
      //调用子组件的方法
      moreComp.value.open();
    };
    const list = () => {
        //路由跳转
      router.push({ path: "/list" });
    };
    const categorys = [
        { name: "异世界", color: "#a5b4fc" },
        { name: "奇幻", color: "#a0d4bc" },
        { name: "热血", color: "#93c5fd" },
    ]
    const journals = [
        { name: "23-01", color: "#f9a8d4" },
        { name: "22-10", color: "#6baece" },
        { name: "22-07", color: "#93c5fd" },
    ]
    return {
        //返回数据
      moreComp,
      more,
      list,
      categorys,
      journals
    };
  },
};
</script>