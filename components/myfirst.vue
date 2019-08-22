<template>
    <div class="first">
        <p>我的名字叫：{{myname}}</p>
        <p>组件只有一个根元素</p>
        <p>单文件组件也是组件，所以可以添加与之前全局组件相同的成员，如data,methods,mounted...</p>
        <p>但是不用再添加template属性了，因为它的结构使用单独的template标签进行描述</p>
    </div>
</template>


<script>
// export：导出
// default:说明后台的对象在被引用的时候会默认的导出
// export default:在被引入的时候会默认导出
// 这个对象本质上就是一个组件实例，这个组件实例拥有当前文件中定义的所有成员：包含template,style和script
export default {
    // data是一个函数
    data(){
        // 函数必须返回一个对象
        return {
            myname:'first_34'
        }
    }
}
</script>


<style lang="less" scoped>
// lang:指定样式类型
// scoped:可以描述局部作用块样式，意味着添加了Scoped，那么样式只能在当前组件中使用
.first{
    > p {
        color:skyblue;
    }
}
</style>


