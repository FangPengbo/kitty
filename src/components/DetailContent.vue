<template>
  <div class="flex-1"></div>
  <div class="flex flex-row h-8/10 w-10/12 container mx-auto">
    <div class="flex flex-row w-10/12">
      <div class="flex flex-col w-1/5"></div>
      <div
        class="flex flex-col bg-no-repeat bg-contain rounded-xl shadow-xl w-1/3 h-5/6"
        :style="{ backgroundImage: 'url(' + detail.bgImg + ')' }"
      ></div>
      <div
        class="flex flex-col relative text-3xl cursor-pointer animate-pulse"
        style="bottom: -90%"
        @click="back"
      >
        🔙
      </div>
      <div
        class="flex flex-col w-1/3 h-5/6 rounded-xl shadow-xl bg-gray-50 px-1"
      >
        <div
          class="flex flex-col h-2/5 subpixel-antialiased ml-2"
          style="white-space: normal; word-break: break-all; overflow: hidden"
        >
          <div class="text-center text-3xl mt-5">{{ detail.name }}</div>
          <div class="leading-6 mt-5 text-gray-500">{{ detail.describe }}</div>
        </div>
        <div class="flex flex-col h-1/5 ml-2 subpixel-antialiased">
          <div class="text-black text-opacity-80">
            类型: {{ detail.category }}
          </div>
          <div class="text-black text-opacity-80">集数: {{ detail.count }}</div>
          <div class="text-black text-opacity-80">
            首播: {{ detail.journal }}
          </div>
          <div class="text-black text-opacity-80">
            单集: {{ detail.duration }}分钟
          </div>
        </div>
        <div class="flex flex-col h-2/5 ml-2">
          ℹ
          <div class="flex flex-row">
            <img
              class="mx-4 w-10 h-10 cursor-pointer"
              src="../../static/douban.png"
              @click="jump(detail.douban)"
            />
          </div>
          ☁
          <div class="flex flex-row">
            <img
              class="mx-4 w-10 h-10 cursor-not-allowed"
              src="../../static/baiduyun.png"
              @click="jump(detail.baiduYun)"
            />
            <img
              class="mx-4 w-10 h-10 cursor-pointer"
              src="../../static/aliyun.png"
              @click="jump(detail.aliYun)"
            />
          </div>
          📺
          <div class="flex flex-row">
            <img
              class="mx-4 w-10 h-10 cursor-pointer"
              src="../../static/bilibili.png"
              @click="jump(detail.bilibili)"
            />
            <img
              class="mx-4 w-10 h-10 cursor-pointer"
              src="../../static/acfun.png"
              @click="jump(detail.acfun)"
            />
            <img
              class="mx-4 w-10 h-10 cursor-pointer"
              src="../../static/other.png"
              @click="jump(detail.other)"
            />
          </div>
        </div>
      </div>
    </div>
    <ContentRight></ContentRight>
  </div>
</template>
<script>
import ContentRight from "../components/ContentRight.vue";
import router from "@/router";
export default {
  components: {
    ContentRight,
  },
  setup() {
    const back = () => {
      router.back();
    };
    const jump = (url) => {
      window.open(url, "_blank");
    };
    const detail = {
      id: 1,
      name: "推しの子",
      describe:
        "当红爱豆“星野爱”未婚生子，产下一对双胞胎。妇科男医生和早逝女病人双双遇难，转生为自己的爱豆“星野爱”的孩子。三年后“星野爱”被害身亡，转生双胞胎寻找杀害母亲的真凶。。。",
      category: "动画 / 音乐",
      count: 11,
      journal: "2023-04-12",
      duration: 24,
      bgImg: "https://img1.imgtp.com/2023/08/24/tT1EI1Fz.png",
      douban: "https://movie.douban.com/subject/35936775",
      baiduYun: "https://movie.douban.com/subject/35936775",
      aliYun: "https://movie.douban.com/subject/35936775",
      bilibili: "https://movie.douban.com/subject/35936775",
      acfun: "https://movie.douban.com/subject/35936775",
      other: "https://movie.douban.com/subject/35936775",
    };
    return {
      back,
      detail,
      jump,
    };
  },
};
</script>