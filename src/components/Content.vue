<template>
  <div class="flex-1"></div>
  <div class="flex flex-row h-8/10 w-10/12 container mx-auto">
    <div class="flex flex-row w-10/12">
      <div class="text-4xl w-10" style="line-height: 18"></div>
      <div class="flex flex-row flex-wrap w-10/12">
        <div
          class="flex-auto w-1/5 ml-10 rounded-lg border-0 cursor-pointer"
          v-for="content in contents"
          :key="content.id"
          @click="detail"
        >
          <div
            class="h-5/6 bg-no-repeat bg-cover rounded-xl shadow-xl "
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
        class="text-4xl relative right-10 w-16"
        style="line-height: 18"
      ></div>
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
    const detail = () => {
      router.push({ path: "/detail" });
    };
    const contents = [
      {
        id: 1,
        name: "我推的孩子",
        bgImg: "https://img1.imgtp.com/2023/08/24/tT1EI1Fz.png",
      },
      {
        id: 2,
        name: "勇者赫鲁库",
        bgImg: "https://img13.360buyimg.com/ddimg/jfs/t1/180298/8/34758/47938/64adb023F5318fe57/dc0ecbe5ea038fff.jpg",
      },
      {
        id: 3,
        name: "黑暗集会",
        bgImg: "https://img14.360buyimg.com/ddimg/jfs/t1/180197/33/34733/75737/64ac3999F536c206e/8995fdb2d8e1b862.jpg",
      },
      {
        id: 4,
        name: "无职转生 第二季",
        bgImg: "https://img12.360buyimg.com/ddimg/jfs/t1/113172/30/40910/55183/64a29665F902adb48/46e477b56fa198b1.jpg",
      },
      {
        id: 5,
        name: "能干的猫今天也忧郁",
        bgImg: "https://img11.360buyimg.com/ddimg/jfs/t1/101705/37/40916/52933/64aafbcbF72dd3d6d/9a70f26b1b02df63.jpg",
      },
      {
        id: 6,
        name: "僵尸100",
        bgImg: "https://img13.360buyimg.com/ddimg/jfs/t1/90434/10/32568/132456/64ab00a9Ff07df7df/56d64e1c108f6709.jpg",
      },
      {
        id: 7,
        name: "咒术回战 第二季",
        bgImg: "https://img14.360buyimg.com/ddimg/jfs/t1/143992/8/36548/86417/64a72bd8F64c21ed0/25854e9277931022.jpg",
      },
      {
        id: 8,
        name: "死神 千年血战篇 第二季",
        bgImg: "https://img13.360buyimg.com/ddimg/jfs/t1/127098/25/32925/56879/64a9c942Fcf6115a4/8980792a3b1a709d.jpg",
      },
    ];
    return {
      detail,
      contents,
    };
  },
};
</script>