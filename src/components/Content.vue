<template>
        <div class="flex-1">
        </div>
        <div class="flex flex-row h-8/10 w-10/12 container mx-auto" > 
            <div class="flex-auto flex-col w-10/12" >
                <div class="flex flex-row h-1/2" >
                    <div class="w-1/5 px-5 mx-10 rounded-lg border-0 cursor-pointer" @click="detail">
                        <div class="h-5/6 bg-no-repeat bg-cover rounded-xl  shadow-xl " style="background-image: url('https://i.328888.xyz/2023/04/24/io8Mq5.jpeg');"></div>
                        <div class="bg-black bg-opacity-50 relative bottom-5 text-center rounded-b-lg text-sm font-bold font-mono text-white"><p>我推的孩子</p></div>
                    </div>
                    <div class="w-1/5 px-5 mx-10 rounded-lg border-0 cursor-pointer">
                        <div class="h-5/6 bg-no-repeat bg-cover rounded-xl  shadow-xl " style="background-image: url('https://i.328888.xyz/2023/04/24/io8Mq5.jpeg');"></div>
                        <div class="bg-black bg-opacity-50 relative bottom-5 text-center rounded-b-lg text-sm font-bold font-mono text-white"><p>我推的孩子</p></div>
                    </div>
                    <div class="w-1/5 px-5 mx-10 rounded-lg border-0 cursor-pointer">
                        <div class="h-5/6 bg-no-repeat bg-cover rounded-xl  shadow-xl " style="background-image: url('https://i.328888.xyz/2023/04/24/io8Mq5.jpeg');"></div>
                        <div class="bg-black bg-opacity-50 relative bottom-5 text-center rounded-b-lg text-sm font-bold font-mono text-white"><p>我推的孩子</p></div>
                    </div>
                    <div class="w-1/5 px-5 mx-10 rounded-lg border-0 cursor-pointer">
                        <div class="h-5/6 bg-no-repeat bg-cover rounded-xl  shadow-xl " style="background-image: url('https://i.328888.xyz/2023/04/24/io8Mq5.jpeg');"></div>
                        <div class="bg-black bg-opacity-50 relative bottom-5 text-center rounded-b-lg text-sm font-bold font-mono text-white"><p>我推的孩子</p></div>
                    </div>
                </div>
                <div class="flex flex-row h-1/2" >
                    <div class="w-1/5 px-5 mx-10 rounded-lg border-0 cursor-pointer">
                        <div class="h-5/6 bg-no-repeat bg-cover rounded-xl" style="background-image: url('https://i.328888.xyz/2023/04/24/ior2xa.jpeg');"></div>
                        <div class="bg-black bg-opacity-50 relative bottom-5 text-center rounded-b-lg text-sm font-bold font-mono text-white"><p>鬼灭之刃 锻刀村篇</p></div>
                    </div>
                    <div class="w-1/5 px-5 mx-10 rounded-lg border-0 cursor-pointer">
                        <div class="h-5/6 bg-no-repeat bg-cover rounded-xl" style="background-image: url('https://i.328888.xyz/2023/04/24/ior2xa.jpeg');"></div>
                        <div class="bg-black bg-opacity-50 relative bottom-5 text-center rounded-b-lg text-sm font-bold font-mono text-white"><p>鬼灭之刃 锻刀村篇</p></div>
                    </div>
                    <div class="w-1/5 px-5 mx-10 rounded-lg border-0 cursor-pointer">
                        <div class="h-5/6 bg-no-repeat bg-cover rounded-xl" style="background-image: url('https://i.328888.xyz/2023/04/24/ior2xa.jpeg');"></div>
                        <div class="bg-black bg-opacity-50 relative bottom-5 text-center rounded-b-lg text-sm font-bold font-mono text-white"><p>鬼灭之刃 锻刀村篇</p></div>
                    </div>
                    <div class="w-1/5 px-5 mx-10 rounded-lg border-0 cursor-pointer">
                        <div class="h-5/6 bg-no-repeat bg-cover rounded-xl" style="background-image: url('https://i.328888.xyz/2023/04/24/ior2xa.jpeg');"></div>
                        <div class="bg-black bg-opacity-50 relative bottom-5 text-center rounded-b-lg text-sm font-bold font-mono text-white"><p>鬼灭之刃 锻刀村篇</p></div>
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
        detail (){
            this.$router.push({path:'/detail'})
        }
    }
}
</script>