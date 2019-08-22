<template>
    <div class="div">
        <p>这个文件讲解计算属性的使用</p>
        <p>{{msg}}</p>
        <p>{{msg.substring(0,1).toUpperCase() + msg.toLowerCase().substring(1)}}</p>
        <p>下面使用计算属性</p>
        <p>{{strDeal}}</p>
        <p>{{strDeal}}</p>
        <p>{{strDeal}}</p>
        <p>{{strDeal}}</p>
        <p>{{strDeal}}</p>
        <p>{{strDeal}}</p>
        <input type="text" v-model="msg">
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'hello'
        }
    },
    // methods中定义就真的是函数
    methods:{
        // strDeal(){
        //     console.log(123)
        //     return this.msg.substring(0,1).toUpperCase() + this.msg.toLowerCase().substring(1)
        // }
    },
    // 定义计算属性
    computed:{
        // 计算属性的声明形式是一个函数
        // 计算属性，是来帮你对数据进行处理的，所以一般要返回处理的结果
        // 只在这个计算属性中的依赖项的值发生了变化，就会自动的触发这个计算属性
        // 什么是依赖项：就是计算属性中的this.***,一般来说就是Data中声明的成员
        // 如果想触发计算属性，必须保证依赖的数据发生变化
        strDeal(){
            console.log(123)
            return this.msg.substring(0,1).toUpperCase() + this.msg.toLowerCase().substring(1)
        }
    }
}
</script>
<style lang="less" scoped>

</style>


