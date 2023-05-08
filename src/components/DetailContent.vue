<template>
        <div class="flex-1">
        </div>
        <div class="flex flex-row h-8/10 w-10/12 container mx-auto" > 
            <div class="flex flex-row w-10/12" >
                <div class="flex flex-col w-1/5"></div>
                <div class="flex flex-col bg-no-repeat bg-contain rounded-xl  shadow-xl w-1/3 h-5/6" style="background-image: url('https://i.328888.xyz/2023/04/24/io8Mq5.jpeg');">
                </div>
                <div class="flex flex-col relative text-3xl cursor-pointer animate-pulse" style="bottom:-90%;" @click="backHome">
                   🔙
                </div>
                <div class="flex flex-col w-1/3 h-5/6 rounded-xl  shadow-xl  bg-gray-50 px-1" >
                    <div class="flex flex-col h-2/5 subpixel-antialiased ml-2" style="white-space:normal; word-break:break-all;overflow:hidden;">
                        <div class="text-center text-3xl mt-5 ">推しの子</div>
                        <div class="leading-6 mt-5 text-gray-500">
                              当红爱豆“星野爱”未婚生子，产下一对双胞胎。
                            妇科男医生和早逝女病人双双遇难，转生为自己的爱豆“星野爱”的孩子。三年后“星野爱”被害身亡，转生双胞胎寻找杀害母亲的真凶。。。
                        </div>
                    </div>
                    <div class="flex flex-col h-1/5 ml-2 subpixel-antialiased">
                        <div class="text-black text-opacity-80">类型: 动画 / 音乐</div>
                        <div class="text-black text-opacity-80">集数: 11</div>
                        <div class="text-black text-opacity-80">首播: 2023-04-12</div>
                        <div class="text-black text-opacity-80">单集: 24分钟</div>
                    </div>
                    <div class="flex flex-col h-2/5 ml-2">
                        ℹ
                        <div class="flex flex-row">
                            <img class="mx-4 w-10 h-10 cursor-pointer" src="../../static/douban.png">
                        </div>
                        ☁
                        <div class="flex flex-row">
                            <img class="mx-4 w-10 h-10 cursor-not-allowed" src="../../static/baiduyun.png">
                            <img class="mx-4 w-10 h-10 cursor-pointer" src="../../static/aliyun.png">
                        </div>
                        📺
                        <div class="flex flex-row">
                            <img class="mx-4 w-10 h-10 cursor-pointer" src="../../static/bilibili.png">
                            <img class="mx-4 w-10 h-10 cursor-pointer" src="../../static/acfun.png">
                            <img class="mx-4 w-10 h-10 cursor-pointer" src="../../static/other.png">
                        </div>
                    </div>
                </div>
            </div>
            <ContentRight></ContentRight>
        </div>
</template>
<script>
import ContentRight from '../components/ContentRight.vue'
export default {
    components:{
        ContentRight
    },
    methods:{
        backHome(){
            this.$router.push({path:'/'})
        }
    }
}
</script>