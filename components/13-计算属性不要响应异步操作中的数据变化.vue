<template>
  <div class="div">
    <p>下面演示计算属性不能响应异步操作中的数据变化</p>
    <p>{{msg}}</p>
    <input type="text" v-model="msg" />
    <h1>{{getmsg}}</h1>
    <h3>{{str}}</h3>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      msg: "aa",
      str: "**"
    };
  },
  // 添加侦听器属性--独立结构
  watch: {
    msg() {
      setTimeout(() => {
        this.str = this.msg.toUpperCase();
      }, 10);
    }
  },
  computed: {
    getmsg() {
      // console.log(123)
      // setTimeout(() => {
      //     return this.msg.toUpperCase()
      // }, 100);
    }
  }
};
</script>
<style lang="less" scoped>
</style>


