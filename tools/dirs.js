import Vue from 'vue'

// 注册一个全局自定义指令 `v-focus`
export const mycolor  =  Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted(el,binding){
        el.style.color = binding.value
    }
  })

// export const mycolor = {
//     inserted(el,binding){
//         el.style.color = binding.value
//     }
// }

export const myfocus = {
    inserted(el){
        el.focus()
    }
}