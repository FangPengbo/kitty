<template>
  <div class="flex-1"></div>
  <div class="flex flex-row h-8/10 w-10/12 container mx-auto">
    <div class="flex flex-row w-10/12">
      <div class="text-4xl cursor-no-drop w-10 animate-pulse" style="line-height: 18">⬅</div>
      <div class="flex flex-row flex-wrap w-10/12">
        <div
          class="flex-auto w-1/5 ml-10 rounded-lg border-0 cursor-pointer"
          v-for="content in contents"
          :key="content.id"
          @click="detail"
        >
          <div
            class="h-5/6 bg-no-repeat bg-cover rounded-xl shadow-xl"
            :style="{ backgroundImage: 'url(' + content.bgImg + ')' }"
          ></div>
          <div
            class="bg-black bg-opacity-50 relative bottom-5 text-center rounded-b-lg text-sm font-bold font-mono text-white"
          >
            <p>{{ content.name }}</p>
          </div>
        </div>
      </div>
      <div
        class="text-4xl cursor-pointer relative -right-10 w-16 animate-pulse"
        style="line-height: 18"
      >
        ➡️
      </div>
    </div>
    <ContentRight></ContentRight>
  </div>
</template>
<script>
import ContentRight from "./ContentRight.vue";
import router from "@/router";
export default {
  components: {
    ContentRight,
  },
  setup() {
    const detail = () => {
      router.push({ path: "/detail" });
    };
    const contents = [
      {
        id: 1,
        name: "我推的孩子",
        bgImg: "https://i.328888.xyz/2023/04/24/io8Mq5.jpeg",
      },
      {
        id: 2,
        name: "我推的孩子",
        bgImg: "https://i.328888.xyz/2023/04/24/io8Mq5.jpeg",
      },
      {
        id: 3,
        name: "我推的孩子",
        bgImg: "https://i.328888.xyz/2023/04/24/io8Mq5.jpeg",
      },
      {
        id: 4,
        name: "我推的孩子",
        bgImg: "https://i.328888.xyz/2023/04/24/io8Mq5.jpeg",
      },
      {
        id: 5,
        name: "鬼灭之刃 锻刀村篇",
        bgImg: "https://i.328888.xyz/2023/04/24/ior2xa.jpeg",
      },
      {
        id: 6,
        name: "鬼灭之刃 锻刀村篇",
        bgImg: "https://i.328888.xyz/2023/04/24/ior2xa.jpeg",
      },
      {
        id: 7,
        name: "鬼灭之刃 锻刀村篇",
        bgImg: "https://i.328888.xyz/2023/04/24/ior2xa.jpeg",
      },
      {
        id: 8,
        name: "鬼灭之刃 锻刀村篇",
        bgImg: "https://i.328888.xyz/2023/04/24/ior2xa.jpeg",
      },
    ];
    return {
      detail,
      contents,
    };
  },
};
</script>