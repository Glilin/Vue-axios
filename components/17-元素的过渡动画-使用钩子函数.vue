<template>
  <div class="div">
    <p>这个文件主要讲解单个元素的过渡动画效果--使用钩子函数</p>
    <input type="button" value="显示和隐藏" @click="isShow = !isShow" />
    <transition
      name="move"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
    >
      <p v-show="isShow" class="myp">我是动画效果的主体元素</p>
    </transition>
  </div>
</template>
<script>
import { clearInterval } from 'timers';
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    //   el:就是当前使用钩子函数实现过滤动画的元素
    beforeEnter: function(el) {
        el.style.marginLeft = '300px'
        el.style.opacity = 0
    },
    enter: function(el, done) {
        var dis = 0
        // 添加过渡偏移效果
        var timerId = setInterval(() => {
            dis ++
            el.style.marginLeft = (300-dis) + 'px'
            el.style.opacity = dis / 300
            if(dis == 300){
                clearInterval(timerId)
                done()
                return;
            }
        }, 10);
    },
    afterEnter: function(el) {
        el.style.marginLeft = '0px'
        el.style.opacity = 1
    },
    beforeLeave: function(el) {},
    leave: function(el, done) {
      done();
    },
    afterLeave: function(el) {}
  }
};
</script>
<style lang="less" scoped>
</style>


