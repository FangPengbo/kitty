<template>
    <!-- home -->
    <div class="min-h-screen flex flex-col" >
        <!-- 上边 -->
        <AppHeader></AppHeader>
        <!-- 中间 -->
        <ListContent></ListContent>
        <!-- 下边 -->
        <Footer></Footer>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import Footer from './Footer.vue'
import ListContent from './ListContent.vue'

export default{
    components:{
        AppHeader,
        Footer,
        ListContent
    }
}

</script>
<style>

    .t-select-none{
        user-select: none;
    }

</style>