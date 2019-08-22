<template>
  <div class="div">
    <p>下面演示深度侦听</p>
    <p>{{msg}}</p>
    <input type="text" v-model="obj.name" />
    <input type="text" v-model="obj.age" />
    <h3>{{str}}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "aa",
      str: "**",
      obj:{
        name:'jack',
        age:20
      }
    };
  },
  // 添加侦听器属性--独立结构
  watch: {
    // 对象是的本质是地址，意味着你修改对象的属性(修改地址空间中存储的数据)，对象的地址并没有发生变化，所以当前不会触发当前的watch
    // obj() {
    //   this.str = '我的名字叫：'+this.obj.name+",我今年" + this.obj.age + "岁"
    // }
    // 原始的深度侦听方式
    // obj:{
    //   // 深度侦听会自动的触发里面的handler函数，名称不要随意
    //   // 这个handler有两个默认的参数：new值，old值
    //   handler(newvalue,oldvalue){
    //     this.str = '我的名字叫：'+this.obj.name+",我今年" + this.obj.age + "岁"
    //   },
    //   // 设置当前侦听为深度侦听
    //   deep:true
    // }
    // 侦听指定属性的变化
    "obj.name"(newvalue,oldvalue){
      console.log(newvalue,oldvalue)
        this.str = '我的名字叫：'+newvalue+",我今年" + this.obj.age + "岁"
    }
  },
  computed: {
  }
};
</script>
<style lang="less" scoped>
</style>


