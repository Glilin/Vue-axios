import Vue from 'vue'
// 1.引入
import VueRouter from 'vue-router'
// 2.use--让Vue使用VueRouter进行路由的管理
Vue.use(VueRouter)


// import 'animate.css'
// 引入组件
// import myfirst from '../components/12-计算属性.vue'
// import myfirst from '../components/13-计算属性不要响应异步操作中的数据变化.vue'
// import myfirst from '../components/14-深度侦听.vue'
// import myfirst from '../components/15-元素的过渡动画.vue'
// import myfirst from '../components/16-元素的过渡动画 -使用css库.vue'
// import myfirst from '../components/17-元素的过渡动画-使用钩子函数.vue'
import myfirst from '../components/18.axios-get.vue'
// import myfirst from '../components/19-axios-post.vue'
// import myfirst from '../components/20-使用封装的Axios发起get请求.vue'
// import myfirst from '../components/21-jsonp跨域.vue'
// import myfirst from '../components/22-vue0resource的使用.vue'
// import myfirst from '../components/23-路由初体验.vue'


// 3.创建路由对象
var router = new VueRouter({
    // 4.进行路由配置，通过routes进行配置，它是一个数组
    routes: [
        // 5.配置具体的路由,一般常见的属性有：
        // name:当前路由的名称
        // path：路由路径
        // component：当前路由所映射的组件对象
        {
            name: 'routerindex',
            path: '/routerindex',
            component: myfirst
        }
    ]
})



new Vue({
    // 6.注入：
    router: router,
    el: '#app',
    // render:可以实现渲染操作
    render: (h) => {
        // h就是真正进行渲染的函数
        // 渲染指定的组件到指定的结构
        return h(myfirst)
    }
})