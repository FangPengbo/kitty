<template>
    <!-- home -->
    <div class="min-h-screen flex flex-col" >
        <!-- 上边 -->
        <AppHeader></AppHeader>
        <!-- 中间 -->
        <DetailContent></DetailContent>
        <!-- 下边 -->
        <Footer></Footer>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import Footer from './Footer.vue'
import DetailContent from './DetailContent.vue'

export default{
    components:{
        AppHeader,
        Footer,
        DetailContent
    }
}

</script>
<style>

    .t-select-none{
        user-select: none;
    }

</style>