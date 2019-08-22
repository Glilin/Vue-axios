<template>
    <div class="div">
        <p>这个文件主要讲解单个元素的过渡动画效果</p>
        <input type="button" value="显示和隐藏" @click="isShow = !isShow">
        <transition name='move'
        enter-active-class="animated rotateIn"
        leave-active-class="animated rotateOut">
            <p v-show="isShow" class="myp">我是动画效果的主体元素</p>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:false
        }
    }
}
</script>
<style lang="less" scoped>
    .myp{
        width: 300px;
        margin: 300px auto;
        background: pink;
    }
</style>


