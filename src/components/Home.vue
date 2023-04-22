<template>
    <!-- home -->
    <div class="flex flex-col" style="width: 100%; height: 100%;">
        <!-- 上边 -->
        <div class="flex flex-row h-1/10">
            <div class="w-1/12 h-16" style="background: url(../static/logo.png) no-repeat;background-size: 64px 64px; "></div>
            <div class="w-10/12">公告</div>
            <div class="w-1/12">头像</div>
        </div>
        <!-- 中间 -->
        <div class="flex flex-row h-8/10" >
            <div class="flex flex-col w-10/12" >
                <div class="flex flex-row h-1/2" >
                    <div class="w-1/3">1</div>
                    <div class="w-1/3">2</div>
                    <div class="w-1/3">3</div>
                </div>
                <div class="flex flex-row h-1/2" >
                    <div class="w-1/3">4</div>
                    <div class="w-1/3">5</div>
                    <div class="w-1/3">6</div>
                </div>
            </div>
            <div class="flex flex-col w-2/12" >
                <div class="h-1/5">1235</div>
                <div class="h-1/5" >xxxx</div>
                <div class="h-1/5" >124</div>
                <div class="h-1/5">643</div>
                <div class="h-1/5" >643</div>
            </div>
        </div>
        <!-- 下边 -->
        <div class="flex flex-row h-1/10">尾部</div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}

</script>
<style>
    div{
        padding: 2px;
        margin: 2px;
        border: 1px solid;
    }
</style>