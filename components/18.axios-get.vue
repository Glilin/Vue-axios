<template>
  <div class="get">
    <p>这个文件讲解axios发起get方式的请求</p>
    <input type="button" value="get请求" @click="getcatelist" />
  </div>
</template>

<script>
// 在当前文件目录打开Powershell 下载npm install axios 然后在app.js引入文件，最后引入当前文件
// 引入axios
import axios from "axios";
export default {
  methods: {
    getcatelist() {
      axios
        .get("http://127.0.0.1:3000/getAllCateList") //返回一个promise对象
        .then(re => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>