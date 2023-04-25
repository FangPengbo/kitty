<template>
    <!-- home -->
    <div class="min-h-screen flex flex-col" >
        <!-- 上边 -->
        <AppHeader></AppHeader>
        <!-- 中间 -->
        <Content></Content>
        <!-- 下边 -->
        <Footer></Footer>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import Footer from './Footer.vue'
import Content from './Content.vue'

export default{
    components:{
        AppHeader,
        Footer,
        Content
    }
}

</script>
<style>

    .t-select-none{
        user-select: none;
    }

</style>