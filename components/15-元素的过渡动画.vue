<template>
    <div class="div">
        <p>这个文件主要讲解单个元素的过渡动画效果</p>
        <input type="button" value="显示和隐藏" @click="isShow = !isShow">
        <transition name='move'>
            <p v-show="isShow">我是动画效果的主体元素</p>
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
    // 添加过渡动画的六个样式
    // 进入
    .move-enter{
        margin-left:300px;
        opacity: 0;
    }
    .move-enter-active{
        transition: all 1s;
    }
    .move-enter-to{
        margin-left:0px;
        opacity: 1;
    }
    // 离开
    .move-leave{
        margin-left:0px;
        opacity: 1;
    }
    .move-leave-active{
        transition: all 1s;
    }
    .move-leave-to{
        margin-left:300px;
        opacity: 0;
    }
</style>


